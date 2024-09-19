// 집합
// 동일한 속성이나 특징을 지닌 것을 묶은 것
// 문자열 : String 타입 // 숫자형 : Number 타입
// 원시 타입(기본형 타입)과 객체타입으로 나뉨

// 원시타입
// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 기본적인 사칙연산 가능
console.log(num1 + num2); // 28.5
console.log(num1 - num2); // 25.5
console.log(num1 * num2); // 40.5
console.log(num1 / num2); // 18
console.log(num1 % num2); // 0 "모듈러 연산"이라고 함

// 양의 무한대
let inf = infinity;
// 음의 무한대
let mInf = -Infinity;

let nan = NaN;

console.log(1 * "hello");
// NaN 출력됨 : 연산이 실패 했을 때 나타나는 언어

// 2. String Type
let myName = 임다은;
// 문자열은 무조건 ""(쌍따옴표) 혹은 ''(작은따옴표)안에 사용
// 안 그러면 변수로 인식하기 때문

let myLocation = "봉천동";
let introduce = myName + myLocation;

console.log(introduce);
// 임다은봉천동 - 문자열도 +- 됨

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// ``(빽틱) : 템플릿 리터럴 = 문자열 안에 변수의 값을 동적으로 넣을 수 잇음.
console.log(introduceText);
// 임다은은 봉천동에 거주합니다. 출력됨
// 템플릿 리터럴 문법 : 문자열과 변수명 같이 사용하는 문법

// 3. Bollean Type
// 참과 거짓만을 저장하는 타입
// 현재의 상태를 의미하는 데 사용됨
let isSwitchOn = true; //  스위치가 켜져잇다.
let isEmpty = false; // 비어있다.

// 4. Null Type
// 아무겂도 없다 라는 뜻
let empty = null;

// 5. Undefind Type
// undefined 라는 단 하나의 값만 할당하는 특수한 값
