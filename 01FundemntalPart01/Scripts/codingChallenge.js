//#1 Bmi
//TestData1
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;
const bmiMark = markMass/markHeight**2;
const johnBmi = johnMass / johnHeight**2;
console.log(bmiMark , johnBmi);
const markHigherBMI = bmiMark>johnBmi;
console.log(markHigherBMI)