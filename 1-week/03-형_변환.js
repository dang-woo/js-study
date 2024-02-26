// 형 변환

// 자바스크립트에서는 다양한 자료형을 다룰 수 있습니다.
// 그리고 이 자료형들은 서로 형변환이 가능합니다.
// 이번에는 자바스크립트의 형 변환에 대해서 알아보겠습니다.

//암시적 형 변환(implicit coercion)
// 암시적 형 변환은 자바스크립트에서 자동으로 수행되는 형 변환이며,
// 일반적으로 연산자를 사용할 때 발생합니다.

//1-1. 문자열 변환
console.log(1 + "2");   // "12"
console.log("1" + true);   // "1true"
console.log("1" + {});   // "1[object Object]"
console.log("1" + null);   // "1null"
console.log("1" + undefined);   // "1undefined"
//문자열과 다른 자료형이 연산자로 결합 -> 이 경우 js는 다른 자료형을 문자열로 변환한 후 연산

// 1-2 숫자 변환
console.log(1 - "2");   // -1
console.log("2" * "3");   // 6
console.log(4 + +"5");   // 9
// 연산자를 사용할 때, 문자열을 숫자로 변환
// 이때, 빈 문자열("")이나 공백 문자열(" ")은 0으로 변환

// 1-3 불리언 변환
console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true
//Boolean() 함수를 사용하여 불리언 값으로 변환
//이때, 0, 빈 문자열(""), null, undefined, NaN은 false로 변환됨
//그 외의 값은 true로 변환됨

//2. 명시적 형 변환(explicit coercion)
// 명시적 형 변환은 개발자가 직접 자료형을 변환하는 것을 말한다.

//2-1 문자열 변환
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String({}));        // "[object Object]"
//위의 예제에서는 String() 함수를 사용하여 다른 자료형을 문자열로 변환합니다.

//2-2. 숫자 변환
console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number("  "));    // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0