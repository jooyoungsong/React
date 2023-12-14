//es6가 조금 더 언어적으로 바뀜, Set과 Map가능 (=컬렉션)
//순차적이고 중복 가능하냐 ? 이걸로 list인지 아닌지로 나눠봤었음

let set=new Set("abcccdddeeefffff");  //set에서 중복문자 걸러내지는 지 확인
console.log(set);

set.add("g"); //없으니깐 추가 됨
console.log(set);

console.log(set.has("a"));  //포함하면 true 출력
console.log(set.has("z"));  //포함하지 않으면 false 출력
console.log("길이: "+set.size);

console.log(...set);
set.delete("a");  //하나씩 삭제
console.log(...set);

set.clear();  //전체삭제
console.log(set.size);

//Map도 Set과 똑같기 때문에 안하고 넘어갈게요.

//비교연산자
let a=6;  //(숫자)
let b="6";  //(""니깐 string)

console.log(a==b);  //true 값으로만 비교
console.log(a===b); //false  타입까지 같아야 true가 나오는데 타입이 같지 않아서 false로 출력됨