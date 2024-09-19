// 1. 변수
let age = 27;
// 변수의 초기값 넣음 : 변수를 초기화 한다.
console.log(age);
// 27 출력됨

// 변수의 값 바꾸기
age = 30;
console.log(age);
// 30 출력됨

let age1;
console.log(age);
// undefined 값이 없다.
// 중복된 이름은 다시 선언 불가능

// 2. 상수 - 값을 저장하는 저장소
// 변수와는 달리 한번 저장된 값은 바꿀 수 없음.
const birth = "1994.01.25";
// 초기값 설정 - 생일 처럼 변할 수없거나 앞으로 변하면 안될 값 저장할 때 사용. 초기값 할당 반드시 필요함.
birth = "123";
console.log(birth);
// 값이 없다고 나옴, 오류뜸
// 초기화 반드시 필요 - 오류 발생

//3. 변수 명명규칙(네이밍규칙)
// 3-1. $, _(언더스코어) 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.(자바스크립트가 예약어로 지정한 이름)
// let if;
// let function;

    
// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;
// 정보가 없으니 무슨 내용인지 모름 (누구도 알아볼 수 없는 변수명 입력하면 안좋음)
// 예를 들어 판매량 세는 기능
// a = 판매량, b = 환불량, c = 전체 판매량
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;

