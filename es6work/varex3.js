var a=1;
var b=2;

 function myFunction(){

    var a=3;
    let b=4;

    if(true){
        var a=5;
        let b=6;

        console.log(a);  //출력: 5
        console.log(b);  //출력: 6
    }
    console.log(a);  //출력: 5
    console.log(b);  //출력: 4
 }

 myFunction();

 console.log(a);  //출력: 1
 console.log(b);  //출력: 2