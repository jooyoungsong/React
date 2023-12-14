let irum="송주영";
let birth=1995;
let likefood="삼겹살";

let curYear=new Date().getFullYear(); //숫자 4자리 반환

//예전 배웠던 방식
let result="이름: "+irum+"\n태어난 연도: "+birth+"\n 나이: "+(curYear-birth)+"\n 좋아하는 음식: "+likefood;

console.log(result);

//오늘 배우는 개념
//리터럴 (백틱 : `)...중간변수 $(변수명)
//리터럴 사용하면(= ``안에 사용) 엔터가 적용되고 여러문장 쓸 때 편하다는 장점이 있음!
let result2=`이름: ${irum}
태어난연도:${birth}
나이:${curYear-birth}
최애음식:${likefood}`;

console.log(result2);