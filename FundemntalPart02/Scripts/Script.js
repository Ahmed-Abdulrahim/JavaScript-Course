//-----------------------------------------------------------
//1Strict mode
"use Strict";
//----------------------------------------
//2-Function
function displayDetails(name , age)
{
    const resutl =  console.log (`my name is ${name} and my age is ${age} `);
    return resutl;
}
displayDetails("Ahmed"  , "30"); //Calling Fun

function Logger()
{
    console.log("Hello world");
}
Logger();
//---------------------------------------------------------------
//3-Declaration vs Expression

//Function Declaration
function CalcAge(birthYear)
{
    return 2025-birthYear;
}
const res = CalcAge(2001);


//Function Expression
const age = function (birthYear) //Function without name
{
    return 2025- birthYear;
}
const res2 = age(2001)

console.log(res , res2);
//----------------------------------------------------------------------
//Arrow Function
const age2 = birthYear=>2025-birthYear;
console.log(age2(2001));

const retire = (birthYear ,fullname)=>
    {
        const age3 = 2025-birthYear;
        const retirement = 65-age3;
        return `${fullname} retire in ${retirement} years`;
    }
  const result = retire(2001 , "Ahmed mohamed");
console.log(result);
console.log(retire(2001 , "Ahmed"));
//-----------------------------------------------------------------------------
//Call Function inside Function
const cutPieces =fruit=>fruit*4;
const fruitProcessor = function (apples , oranges)
{
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `juice with ${applePieces} Apples and ${orangePieces} Oranges `; 
    return juice
}
console.log(fruitProcessor(5,6));
//-----------------------------------------------------------------------------