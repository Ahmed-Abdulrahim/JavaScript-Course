//--------------------
//1
"use Strict";
/*const calcAverage=(num1 , num2 , num3)=> (num1 , num2 , num3)/3;
     
    
function checkWinner(avgDolphins , avgKoalas)
{
    if(avgDolphins> 2* avgKoalas )
    {
        console.log(`Dolphine win (${avgDolphins} vs. ${avgKoalas})"`);
    }
else if (avgKoalas>=2*avgDolphins)
    {
     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})"`);
    }
    else 
    {
       console.log("Draw");

    }
}

let avgDolphine = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
console.log(avgDolphine , avgKoalas)
checkWinner(avgDolphine , avgKoalas);//winner Data1;
 avgDolphine = calcAverage(85,54,41);
 avgKoalas = calcAverage(23,34,27);
checkWinner(avgDolphine , avgKoalas);//winner Data2;
//--------------------------------------------------------------------
//2
const calcTip = (bill)=> tip = 300>bill>50? bill*.15 :bill*.20;

const calcTotal = function (bill)
{
  const tip = 300>bill>50? bill*.15 :bill*.20;
return tip+bill;
}

const tips = [calcTip(125) , calcTip(555) , calcTip(44)];
const total = [calcTotal(125) , calcTotal(555) , calcTotal(44)];
console.log(tips);
console.log(total);*/
//------------------------------------
//3
const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    const bmiMark = this.mass / this.height ** 2;
    return bmiMark;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    const bmiJohn = this.mass / this.height ** 2;
    return bmiJohn;
  },
};
console.log(
  `${
    Mark.calcBmi() > john.calcBmi()
      ? `${Mark.fullName}'s Bmi ${Mark.calcBmi()} is higher than ${
          john.fullName
        }'Bmi${john.calcBmi()}`
      : `${john.fullName}'s Bmi ${john.calcBmi()} is higher than ${
          Mark.fullName
        }'Bmi${Mark.calcBmi()}`
  }`
);
