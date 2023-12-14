//es6에서는 class기능이 추가됨
//프론트에서 구현하기 어려운 부분이 있어서 class로 모듈화를 만들어 냈다고 생각하면 편하다.

class Student{

    //생성자...무조건 클래스명이 constructor로 한다. 모두 통일
    constructor(name){
        this.name=name;
    }

    /*//멤버함수
    showName(){
        console.log("내 이름은 "+this.name+"입니다");
    }*/

    showName(){
        console.log(`내 이름은 ${this.name}랍니다!!!`);
    }
}
let s1=new Student("민규");
console.log("이름: "+s1.name);
s1.showName();

let s2=new Student("연주");
console.log('이름: ${s2.name}');
s2.showName();