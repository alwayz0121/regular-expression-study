//정규표현식으로 검색할 문자
const str = `
010-1234-5678
thealwayz@gmail.com
https://www.omdbapi.com/apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
// `;

//마침표를 찾고 싶다. 동작이 아닌 문자로 해석되도록 \백슬러시를 넣도록 하자.
//.$ : 마침표로 끝나는 부분을 찾고 싶다
console.log(str.match((regexp = /\.$/gim)));
