// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// const arr = [1, 5, 7, 8, 3, 6];

// let sum = 0;

// for (var i of arr) {
//   sum += i;
// }
// console.log(sum);

// checked
// დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// const arr = [1, 2, 3, 4, 5, 6];
// let number = 0;
// for (var i of arr) {
//   number += i / arr.length;
// }
// console.log(number);

// checked

// დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

// const arr = [1, 9, 5, 8, 3, 4];

// const sortedArr = arr.sort((a, b) => a - b);

// console.log(sortedArr);

// დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// const arr = [1, 9, 5, 8, 3, 4];

// const findBiggest = Math.max(...arr)
// console.log(findBiggest)

// დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// const arr = [1, 9, 5, 8, 3, 4]
// const findLowest = Math.min(...arr)
// console.log(findLowest);

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// const arr = [1, 9, 5, 8, 3, 4];

// const containes = arr.includes(1);

// console.log(containes);

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// const arr = [1, 9, 5, 8, 3, 4];

// const removeItem = arr.slice(0,3);
// console.log(removeItem);

// დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// const arr = [1, 6, 3, 7, 7, 7, 5, 3, 7, 9];

// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

// const arr = [2, 8, 3, 6, 5, 4, 11, 22, 16];
// let sum = 0;
// for (var i of arr) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// const arr = [2, 8, 3, 6, 5, 4, 11, 22, 16];

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 7, 8, 1, 1, 3];

// console.log(arr1.length == arr2.length ? true : false);

//დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

// const arr = [1, 2, 3, 4, 5];

// const arr1 = [6, 7, 8, 9, 10];
// const sort1 = arr.sort((a, b) => a - b);
// const sort2 = arr1.sort((a, b) => b - a);
// const sorted = [...sort1, ...sort2];
// const final = sorted.sort((a, b) => a - b);
// console.log(final);

// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.

// const stringsArray = ["banana", "apple", "orange", "grape", "pear"];

// const sorted = stringsArray.sort();

// console.log(sorted);

// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// const arr1 = [1, 3, 5];
// const arr2 = [2, 3, 8];
// const arr3 = [9, 3, 10];
// function findCommonElements(arrays) {
//   if (!arrays || arrays.length === 0) {
//     return [];
//   }

//   const baseArray = arrays[0];

//   const commonElements = [];

//   for (let element of baseArray) {
//     if (arrays.every((arr) => arr.includes(element))) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// }
// console.log(findCommonElements([arr1, arr2, arr3]));

// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

// const Car = {
//   mark: "BMW",
//   model: "x5",
//   year: "2013",
//   start: "The car is starting!",
// };

// console.log(Car.start);

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

const Person = {
  name: "tornike",
  city: "rustavi",
  year: "22",
  job: "programmer",
};

console.log(Person.job);
