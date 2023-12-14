function func1(x,y=200,z=300){ //이렇게 기본값 설정이 가능

    console.log(x,y,z);
}

func1(3,4,5);
func1(100);
func1(3,4);
func1();

function func2(a,b){
    return a+b;
}

console.log(func2(5,6));

let arr=[3,5,9];
let r2=func2(arr[0],arr[1]);

console.log(r2);

//... : es6에서 추가된 기능, 펼침연산자
func1(...arr);
func1(arr[0],arr[1],arr[2]);

let r3=func2(...arr); //앞의 2개 값이 넘어가서 console.log 찍었을 때 8이 출력되는 것임.
console.log(r3);  //출력: 8