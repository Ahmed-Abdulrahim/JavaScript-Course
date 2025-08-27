// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
//  Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempaamplitude = function (temp) {
  let maxElement = temp[0];
  let minElement = temp[0];

  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > maxElement) maxElement = temp[i];
    if (temp[i] < minElement) minElement = temp[i];
  }
  return maxElement - minElement;
};
//------------------------------------------problem 2
// merged Two array
const calcTempaamplitudeNew = function (t1, t2) {
  const a3 = t1.concat(t2);
  console.log(a3);
  let maxElement = a3[0];
  let minElement = a3[0];

  for (let i = 0; i < a3.length; i++) {
    if (typeof a3[i] !== "number") continue;
    if (a3[i] > maxElement) maxElement = a3[i];
    if (a3[i] < minElement) minElement = a3[i];
  }
  return maxElement - minElement;
};

const t1 = [4, 65, 78, 98, 5];
const t2 = [4, 87, 7, 9];
console.log(calcTempaamplitudeNew(t1, t2));
