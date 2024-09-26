const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

console.log(`Check if all numbers are divisible by 5. Cache the result in a variable`)
let isDivisible = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log(isDivisible); // true

// console.log(`Check if the first number is larger than the last. Cache the result in a variable`)
let largerThan = n1 > n4;
console.log(largerThan); // true

console.log(`Accomplish the following arithmetic chain`)
console.log(`Subtract the first number from the second number`)
let subtracted = n1 - n2;
console.log(subtracted); // -5

console.log(`Multiply the result by the third number`)
let result = subtracted * 3;
console.log(result); // -15

console.log(`Find the remainder of dividing the result by the fourth number`)
let remainder = result % n4; 
console.log(remainder); // 0

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25); // false
