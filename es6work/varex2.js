/*
var:함수형변수 ...재사용 가능/업데이트 가능/새로 선언도 가능 var a=김영환, var a=이민규 가능
let:영역형변수 ...변수 재선언이 안 됨/업데이트 가능... let a=김영환, let a=이민규이 불가능
const:영역형변수 ...상수일 때 사용/변수 재선언 안 됨/업데이트 불가능
*/

//var Test: 재선언 가능, 업데이트 가능
var hello="안녕";
var hello="헬로우";
var cnt=5;

if(cnt<6){
    var hello1="say hello~~";
    console.log(hello1);  //출력: say hello~~
}

console.log(hello1); //출력 : say hello~~
console.log(hello); //출력 : 헬로우

//let 테스트 해볼게요.  ...재선언 불가능,업데이트 가능
let hi="hi";
hi="하이라고 할게";

let times=5;

if(times>3){
    let hi1="say Hi~~";
    console.log(hi1);
}

//console.log(hi1);  //오류 나옴 undefined
console.log(hi);

//const : 업데이트 불가능, 재선언 불가능
//const hi3="안녕"; 이렇게도 쓰는데 영역형으로 {}이렇게 주기도 한다

const hi3={
    message:"3th say Hi~~",
    times:4
}

console.log(hi3);


/*
이렇게 쓰면 에러난다는 걸 보여주기 위해 씀
hi3={
    message:"4th say Hi~~",
    times:5
}

console.log(hi3);
*/


hi3.message="이렇게 될까?";
hi3.times=44;

console.log(hi3);