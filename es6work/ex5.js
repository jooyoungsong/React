let arr1=[2,4,6];
let arr2=[6,7];
let arr3=[11,12,...arr1,22,...arr2];
console.log(arr3.length);  //출력 8
console.dir(arr3);  //dir은 구조까지 나오고, log는 값만 나옴

let arr4=[...[100,200],...arr2];
console.log(arr4);

//function인데 덧셈 해볼게요
function fsum(arr){
    let sum=0;

    /*//방법1
    for(i=0;i<arr.length;i++){
        sum+=arr[i];

    }
    console.log("합계: "+sum);*/

    //방법2
    for(let a in arr){  //for each문이랑 같은 원리이다라고 생각하면 됨  //let a in arr(in을 쓰면 arr의 [a]번지 느낌)과 let a of arr이 있음(이건 그냥 요소 느낌)
        sum+=arr[a];
    }
    console.log("합계: "+sum);
}

fsum(arr3);

//
function func3(a,b,c,d,e){
    console.log(a,b,c,d,e);
}

//func3(arr3);  //오류남
func3(...arr3); //arr을 인자로 쓰고 싶다면 앞에 ...을 붙이면 값이 나온다.