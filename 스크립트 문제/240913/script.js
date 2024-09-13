// let num1 = 10;
// let num2 = 3;

// num1 += num2;
// console.log(num1);

// num1 -= num2;
// console.log(num1);

// num1 *= num2;
// console.log(num1);

// num1 %= num2;
// console.log(num1);

// num1 %= num2;
// console.log(num1);

let i = parseInt(prompt("첫번째 숫자를 입력해 주세요"));
let j = parseInt(prompt("두번째 숫자를 입력해 주세요"));
console.log(`현재 i:${i}, j:${j}`);

j += i;

console.log(`두 수를 더한 값을 j에 넣으면 j의 값은 ${j} 입니다`);
console.log(`현재 i = ${i} j=${j}`);

j -= i;

console.log(`두 수를 뺀 값을 j에 넣으면 j의 값은 ${j} 입니다.`);
console.log(`현재 i = ${i} j=${j}`);

j *= i;

console.log(`두 수를 곱한 값을 j에 넣으면 j의 값은 ${j} 입니다.`);
console.log(`현재 i = ${i} j=${j}`);

j /= i;
console.log(`두 수를 나눈 결과를 j에 넣으면 j의 값은 ${j} 입니다.`);
console.log(`현재 i = ${i} j=${j}`);

j /= j;
console.log(`두 수를 나눈 나머지 값을 j에 넣으면 j의 값은 ${j} 입니다.`);
