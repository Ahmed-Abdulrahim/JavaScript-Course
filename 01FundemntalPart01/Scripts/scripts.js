///6
/*let country = "Egypt";
let continent = "Africa";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);
//---------------------------------------------------------
//7-DataType
let isIsland = "Egypt";
isIsland = true;
let language;
console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);
//---------------------------------------------------------
//8- let, const, var
language = "Arabic";
const country1 = "Egypt";
//country1="sdsada";//Eroor
console.log(country1);
//---------------------------------------------------------
//9- Basic Operators
//If your country split in half, and each half would contain half the population,then how many people would live in each half?
let fHalf = population/2;
//Increase the population of your country by 1 and log the result to the console
fHalf++;
//Finland has a population of 6 million. Does your country have more people than Finland?
if (fHalf>6) alert("bigger than");
if (fHalf<6) alert("lessthan than");
let description = "Portugal is in Europe, and its 11 million people speak portuguese"
//----------------------------------------------------------
//12  Strings and Template Literals
const fName = "Ahmed";
const lName = "Mohamed";
const year = 2025;
const birthDate = 2001;
let details = "iam " + fName +"," + lName+"iam "+
(year-birthDate) + "YearsOld";
console.log(details);
details = `iam ${fName} ${lName} , ${year-birthDate} Years Old`;
 console.log(details);
 const mulitplelines = "random\nMultiple\nLines";
 console.log(mulitplelines);
 const randomString = `hello
 From
 Multiple
 Line`
 console.log(randomString);
//----------------------------------------------------
//13 if else
let age = 10;
if (age>12)
    {
        console.log("Ypu area allowed to create Account"); 

    }
else
    {
        console.log(`you have to wait ${12-age}years old`);

    }

    const birthDay = 1800;
    let century;
    if (birthDay<=2000)
        {
             century = 20;
        }
    else
        {
             century  = 21;
        }
    console.log(century);
//--------------------------------------------------------------------------
//Type conversion vs Coercion
let Aage = "45";
console.log(Number(Aage));
Aage = 45
console.log(String(Aage) , 45);
Aage = "Hello";
console.log(Number(Aage));
//------------------------------
//Coercion
console.log("45"+25+"10");//452510
console.log("45"-"52");//-7
console.log(5-2-1+"8"+"9")//289
console.log(5-2-9+"8"-"9")//-77
//---------------------------------------------
//false values -----> 0 , null , undefined , Nan , '' 
console .log(Boolean(0));
console .log(Boolean(null));
console .log(Boolean(undefined));
console .log(Boolean(NaN));
console .log(Boolean({}));
console .log(Boolean("Ahmed"));
let height = 0;
if(height || height == 0)
    {
        console.log("Height is Alerady Deifned");
    }
   else
    {
        console.log("Height is Not Deifned");
    } 
//---------------------------------------------------------------------
//Equality op === vs ==
//--->=== Strict op , -->==Loose Op
console.log (18===18) //true
console.log("18"===18)//false
//--
console.log("18"==18)// true
//---------------------------------------------------------------------
//--Logicla op 
const hasDrivingLicense = true;
const hasDrivingSkills = true;
if(hasDrivingLicense && hasDrivingSkills)//true && true ---> true
{
    console.log("Every Value is True")
}

if(hasDrivingLicense || hasDrivingSkills)//true && true ---> true ,,,,,,, //true && False ---> true
{
    console.log("Every Value is True")
}

if(!hasDrivingLicense)
    {
        console.log("revrse value") // true--->false ,,,,,,,,,,,,fasle-->true
    }
//-------------------------------------------------------------------------
//Switch Case
const day = 'Sun';
switch(day)
{
    case 'Sat':
        console.log("Sat");
        break;
    case 'Sun':
    case 'mon':
        console.log("Sun and Mon");
        break;
    case 'tue':
    case 'Wed':
        console.log("tue and Wed");
        break;
    case 'thurs':
        console.log("thurs");
        break;
    default:
        console.log("fri");
        break;
}*/
//---------------------------------------------------------
//ternary op
const age = 15;
const result = age>=15?'Drink wine 🍷':'Drink water 💧';
console.log(result);
console.log(`i want to Drink ${age>=15?'Drink wine 🍷':'Drink water 💧'}`);
//-----------------------------------------------------------





