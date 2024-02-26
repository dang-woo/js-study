//데이터 타입
//코드를 작성할 때가 아닌, 실제 코드가 실행될 때
//데이터 타입이 결정된다.


//1.숫자형
//정수형 숫자(Integer)
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // "number"

//실수형 숫자(Float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

//지수형 숫자(Exponential)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"

//NaN(Not a Number)
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"
/*
NaN(Not a Number)은 자바스크립트에서 숫자가 아님을 나타내는 값이다.
수학적으로 정의되지 않는 계산을 하거나,
숫자가 아닌 값을 숫자로 변환하려고 할 때 발생함.
 */

//Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"

// Infinity
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"

//2.문자열(String)
//문자열은 문자의 나열입니다. 작은 따옴표(')나 큰 따옴표(")로 감싸서 표현합니다.

let name = 'Alice';
let message = "Hello, world!";

//문자열 길이(length) 확인하기
// let str = "Hello, world!";
// console.log(str.length); // 13
//문자열 결합(concatenation)
// let str1 = "Hello, ";
// let str2 = "world!";
// let result = str1.concat(str2);
// console.log(result); // "Hello, world!"

// 문자열 자르기(substr, slice)
// let str = "Hello, world!";
// console.log(str.substr(7, 5)); // "world"
// console.log(str.slice(7, 12)); // "world"

//문자열 검색(search)
// let str = "Hello, world!";
// console.log(str.search("world")); // 7


//문자열 대체(replace)
// let str = "Hello, world!";
// let result = str.replace("world", "JavaScript");
// console.log(result); // "Hello, JavaScript!"

// 문자열 분할(split)
let str = "apple, banana, kiwi";
let result = str.split(",");
console.log(result); // ["apple", " banana", " kiwi"]

//3.불리언(Boolean)
// 불리언은 참(true)과 거짓(false)을 나타내는 데이터 타입입니다.
let bool1 = true;
console.log(bool1); // true
console.log(typeof bool1); // "boolean"

let bool2 = false;
console.log(bool2); // false
console.log(typeof bool2); // "boolean"

/*
불리언 데이터 타입은 조건문(if, else, switch 등)과
논리 연산자(&&, ||, !)와 함께 많이 사용됩니다.
예를 들어, 다음과 같은 코드를 작성할 수 있습니다.
 */

// let x = 10;
// let y = 5;
//
// if (x > y) {
//     console.log("x is greater than y");
// } else {
//     console.log("x is less than or equal to y");
// }
//
// let a = true;
// let b = false;
//
// console.log(a && b); // false
// console.log(a || b); // true
// console.log(!a); // false

//undefined
// undefined는 값이 할당되지 않은 변수를 의미합니다.
// let x;
// console.log(x); // undefined

// null
// null은 값이 존재하지 않음을 의미합니다. undefined와는 다릅니다.
// let y = null;

//객체(Object)
// 자바스크립트에서는 객체가 매우 중요한 역할을 합니다.
// 객체는 속성과 메소드를 가지는 컨테이너입니다.
// 중괄호({})를 사용하여 객체를 생성합니다.

let person = { name: 'Alice', age: 20 };
person.name // 'Alice'
person.age // 20

// 배열(Array)
// 배열은 여러 개의 데이터를 순서대로 저장하는 데이터 타입입니다.
// 대괄호([])를 사용하여 배열을 생성합니다.

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];