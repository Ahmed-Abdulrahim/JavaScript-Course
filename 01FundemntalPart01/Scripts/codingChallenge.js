//#1 Bmi
let bmiMark , johnBmi;
let markHeight, markMass;
let johnHeight  , johnMass;
markHeight = 1.88;
markMass = 95;
johnHeight = 1.76;
johnMass=85;
bmiMark = markMass/markHeight**2;
console.log(bmiMark);
johnBmi = johnMass / johnHeight**2;
console.log(johnBmi);
//--------------------------------------
//TestData1
markHeight = 1.69;
markMass = 78;
johnHeight = 1.95;
johnMass = 92;
bmiMark = markMass/markHeight**2;
console.log(bmiMark);
johnBmi = johnMass / johnHeight**2;
console.log(johnBmi);
const markHigherBMI = bmiMark>johnBmi;
console.log(markHigherBMI)