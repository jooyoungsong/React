//화살표함수
//익명내부클래스는 한 번 쓰는 이벤트 형식이었어
//람다함수? _익명내부클래스 쓸 때 람다를 통해 불러왔다!
//람다함수 = 익명함수와 같다
//에크마6에서는 거의 모든 이벤트를 화살표함수로 처리한다. 나는 굳이 화살표 쓰지 않고 function으로 쓰고 싶다면 어쩔 수 없지만, function을 대신하는게 화살표함수임!

//화살표 함수 : new객체생성이 안됨
//자바의 Ramda익명함수와 같은 방식(function키워드 대신 화살표 사용)

/* 일반적인 함수 
function 함수명(){
    함수로직
}
*/

/* 익명함수
function ()}{
    함수로직
}
*/

/* 
<const에서 function 쓸 때>

const 변수 = function(){
    함수로직
}

<const에서 function 안 쓸 때 = 화살표함수 사용할 때>
const 변수 = ()=>{
    함수로직
}

*/


//일반함수
function f1(){
    console.log("일반함수 f1");
}
f1();

//일반함수를 화살표함수로 바꿔볼게요(function 사용 안하는 것임)
let f2=()=>console.log("화살표함수 f2");
f2();

//일반
function f3(a,b){
    return a+b;
}

let a=f3(5,7);
console.log(a);

//화살표 ...여기서 ()가 값 저장도 된다. 지금은 블록괄호 생략 (블록괄호는 여러줄일 때, 한 줄 일때는 그냥 아래처럼 표현 가능)
let f4=(a,b)=>a+b; //한 줄 일때는 return 생략가능
let b=f4(11,22);
console.log(b);

//일반함수 f5
function f5(x,y,z=100){
    return x+y+z;
}

console.log(f5(1,2,3));
console.log(f5(40,50));

//f5를 화살표함수 f6으로 구한 후 호출하세요.
let f6=(x,y,z)=>x+y+z;

console.log(f6(4,5,6));