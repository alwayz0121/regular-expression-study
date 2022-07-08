# 정규표현식 (RegExp)

정규식, Regular Expression

문자를 검색, 대체, 추출하는 방법을 대체할 수 있음. <br/>
(특수 기호를 사용하기에 어렵다고 생각할 수 있지만! 시작해보자!)

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 정규표현식 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");

//리터럴
/표현/옵션  <br />
/[a-z]/gi;
```

#### 예제 문자

```js
//정규표현식으로 검색할 문자
const str = `010-1234-5678
thealwayz@gmail.com
https://www.omdbapi.com/apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd`;

// 생성자 함수를 통한 정규식 생성
const regexp = new RegExp("the", "gi");

// 리터럴 방식을 통한 정규식 생성
const regexp = /the/gi;
console.log(str.match(regexp));
```

## 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| test    | `정규식.test(문자열)`              | 일치 여부(Boolean) 반환          |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array 반환) |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

#### 예제 (메소드)

```js
// test : 정규식 내에서 해당 문자가 있는지를 확인함. 있으면 true가 반환될 것
const regexp = /fox/gi;
console.log(regexp.test(str));

// replace : 원본 데이터를 손상시키지는 않고 문자열 변경만 진행.
console.log(str.replace(regexp, "AAA"));

//대체한 데이터로 재할당 하고 싶다면
// const -> let으로 변경 후 재할당 진행
let str = `
010-1234-5678
thealwayz@gmail.com
https://www.omdbapi.com/apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
const regexp = /fox/gi;
str = str.replace(regexp, "AAA");
console.log(str);
```

## 플래그(옵션)

| 플래그 | 설명                                      |
| ------ | ----------------------------------------- |
| g      | 모든 문자 일치(global)                    |
| i      | 영어 대소문자 구분 않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                  |

#### 예제 (플래그)

```js
const regexp = /the/;
//the 가 들어간 첫 번째 위치를 알 수 있음

const regexp = /the/g;
//정확히 the (대문자는 파악하지 않음) 가 들어간 내용이 배열로 묶임

const regexp = /the/gi;
//대소문자 상관 없이 the 를 찾게 됨

console.log(str.match(regexp));

// m : 문자 데이터의 각각의 줄을 시작-끝으로 줄로 해석하겠다.
//마침표를 찾고 싶다. 동작이 아닌 문자로 해석되도록 \백슬러시를 넣고
//.$ : 마침표로 끝나는 부분을 찾아보자
console.log(str.match((regexp = /\.$/gim)));
```

## 패턴(표현)

| 패턴       | 설명                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| ^ab        | 줄(Line) <u>시작</u>에 있는 ab와 일치                                   |
| ab$        | 줄(Line) <u>끝</u>에 있는 ab와 일치                                     |
| .          | <u>임의</u>의 한 문자와 일치                                            |
| a&verbar;b | a <u>또는</u> b와 일치                                                  |
| ab?        | b가 없거나 b와 일치                                                     |
| {3}        | 3개 연속 일치                                                           |
| {3,}       | 3개 이상 연속 일치                                                      |
| {3,5}      | 3개 이상 5개 이하(3~5개) 연속 일치                                      |
| [abc]      | a또는 b또는 c                                                           |
| [a-z]      | a부터 z 사이의 문자 구간에 일치 (영어 소문자)                           |
| [A-Z]      | A부터 Z 사이의 문자 구간에 일치 (영어 대문자)                           |
| [0-9]      | 0부터 9 사이의 문자 구간에 일치 (숫자)                                  |
| [가-힣]    | 가부터 힣 사이의 문자 구간에 일치 (한글)                                |
| \w         | 63개 문자 (<u>W</u>ord, 대소영문 52개 + 숫자 10개 + \_)에 일치          |
| \b         | 63개 문자에 일치하지 않는 문자 경계 (<u>B</u>oundary, 글자와 글자 사이) |
| \d         | 숫자 (<u>D</u>igit)에 일치                                              |
| \s         | 공백 (<u>S</u>pace, Tab 등)에 일치                                      |
| (?=)       | 앞쪽 일치 (Lookahead)                                                   |
| (?<=)      | 뒤쪽 일치 (Lookbehind)                                                  |

#### 예제 (패턴)

```js
//g(문자 전체에서) d로 끝나는 부분을 찾고 싶다
console.log(str.match(/d$/g));
//예상 : abbcccdddd
//호출 : null ?????!
//이유 : 문자 전체를 줄 바꿈 인지하지 않고 백틱 바로 앞으로 인지하기 때문에 해당 위치에 d가 없으므로 null

console.log(str.match(/d$/gm));
//multi line 을 추가 적용하면 각 줄마다 d로 끝나는 부분을 찾게 됨.
//대문자 d는 발견되지 않음!!

console.log(str.match(/./g));
//띄어쓰기도 하나의 글자로 인식함

console.log(str.match(/h..p/g));
//h로 시작하고 p로 끝나는 글자를 찾게 됨

console.log(str.match(/https?/g));
//s가 있거나 없거나 = https 또는 http를 검색하게 됨

console.log(str.match(/[0-9]{1,}/g));
//1글자 이상의 연속되는 숫자를 찾아라

console.log(str.match(/\bf\w{2,3}\b/g));
//f로 시작하는
//w{2,3} : 숫자나 문자가 2~3개 글자를 찾되
//앞뒤가 \b = 숫자나 문자가 아닌 (띄어쓰기, 특수문자 등) 문자를 찾아라

const h = `  the hello   world      !

`;
console.log(h.replace(/\s/g, " "));
// 문자 내에 띄어쓰기가 무분별하게 있는 경우 띄어쓰기를 정리할 수 있다

console.log(str.match(/.{1,}(?=@)/g));
//@기호 앞의 1글자 이상의 글자를 추출

console.log(str.match(/(?=@).{1,}/g));
//@기호 뒤의 1글자 이상 글자를 추출
```
