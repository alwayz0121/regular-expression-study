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

#### 예제

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

#### 예제

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

| 패턴 | 설명                           |
| ---- | ------------------------------ |
| ^ab  | 줄(Line) 시작에 있는 ab와 일치 |
| ab$  | 줄(Line) 끝에 있는 ab와 일치   |
