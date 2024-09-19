// 구조분해할당

// const testO = {
//   name: "daeun",
//   age: 31,
//   skill: react,
// };

// const { name, age, skill } = testO;

// console.log(name, age, skill);

// // 단락회로평가

// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());

// 영화 데이터 찾아오기
// const calcA = () => {
//   console.log("A");
//   return false;
// };

// const calcB = () => {
//   console.log("B");
//   return true;
// };

// console.log(calcA() && calcB());
// console.log(calcA() || calcB());

// const person = {
//   name: "Chloe",
//   age: 20,
//   location: "Seoul",
// };

// const keyArrs = Object.keys(person);
// console.log(keyArrs);

// keyArrs.forEach((item) => {
//   let value = person[item];
//   console.log(value);
// });

// 전개 연산자

// const arrA = [1, 2, 3];
// const arrB = [4, 5, 6];
// const arrC = [arrA, arrB];
// const arrE = [...arrA, ...arrB];
// const arrD = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.log(arrC);
// console.log(arrE);

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = { c: 3 };

// const objC = {
//   ...objA,
// };

// console.log(objC);

// 배열 메서드 특집!

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food, newLength);

// const removedItem = food.pop();
// console.log(removedItem);
// console.log(food);

// let food = ["짜장면", "피자", "치킨"];

// const removedItem = food.shift();
// console.log(removedItem);
// console.log(food);

// const sliced = food.slice(0, 2);
// console.log(sliced);

// const arr = [
//   { name: "박보영", hobby: "독서하기" },
//   { name: "전지현", hobby: "음악듣기" },
//   { name: "송혜교", hobby: "달리기" },
//   { name: "김태희", hobby: "음악듣기" },
// ];

// 실행안됨!!
// const arr1 = [10, 5, 3];
// arr1.sort(a - b);
// // arr1.sort(a - b);
// console.log(arr1);
// const compare = (a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
//   a - b; // 내림차순
// };

// arr1.sort(compare);

// console.log(arr1);

// const newArr = arr.map((item) => item.name);
// // map안에 콜백이지만 return을 안썼기 때문에 {중괄호}안 넣어도 됨!

// console.log(newArr);
// console.log(arr);

// let food = ["짜장면", "피자", "치킨"];

// console.log(food.join("-"));

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, item) => acc + item, 0);
//(acc 누산기, item 더해질 값) => 실행시킬 값
console.log(result);
//15
