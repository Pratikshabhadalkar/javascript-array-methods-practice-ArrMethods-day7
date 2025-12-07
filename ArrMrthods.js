// 🌟 Task 1: Use map() → double values
let arr1 = [1, 2, 3, 4];
let doubled = arr1.map(n => n * 2);
console.log(doubled);

// 🌟 Task 2: Use filter() → extract even numbers
let arr2 = [1, 2, 3, 4];
let even = arr2.filter(n => n % 2 == 0);
console.log(even);

// 🌟 Task 3: Use reduce() → sum of [5, 10, 20]
let arr3 = [5, 10, 20];
let total = arr3.reduce((sum, n) => sum + n, 0);
console.log(total);

// 🌟 Task 4: Use find() → first number > 50
let arr4 = [10, 55, 23, 99];
let firstNumber = arr4.find(n => n > 50);
console.log(firstNumber);

// 🌟 Task 5: Sort array in ascending order
let arr5 = [40, 5, 100, 2, 30];
arr5.sort((a, b) => a - b);
console.log(arr5);

// 🌟 Task 6: Use some() → any number > 25?
let arr6 = [40, 5, 100, 2, 30];
let anyBig = arr6.some(n => n > 25);
console.log(anyBig);

// 🌟 Task 7: Use every() → check all numbers positive
let arr7 = [40, 5, 100, 2, 30];
let allPositive = arr7.every(n => n > 0);
console.log(allPositive);
