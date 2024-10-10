let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const calcBMI = (mass, height) => mass / (height * height);

let BMIMark = calcBMI(massMark, heightMark);
let BMIJohn = calcBMI(massJohn, heightJohn);

console.log("-------------------------------- Bài 01 --------------------------------");

let markHigherBMI = BMIMark > BMIJohn;
console.log(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
console.log(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = calcBMI(massMark, heightMark);
BMIJohn = calcBMI(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
console.log(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");