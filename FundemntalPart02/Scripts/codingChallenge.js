//--------------------
//1
"use Strict";
/*const avgDolphins = (79+112+101)/3;
const avgKoalas = (109+95+123)/3;
if(avgDolphins>avgKoalas && avgDolphins>=100)
    {
        console.log("Team Dolphins Wins trophy");
    }
else if (avgDolphins<avgKoalas && avgKoalas >=100)
    {
        console.log("Team Koalas Wins trophy");

    }
else if (avgDolphins===avgKoalas && avgDolphins>=100)
    {
       console.log("Draw");

    }*/
const calcAverage=(num1 , num2 , num3)=> (num1 , num2 , num3)/3;
     
    
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
