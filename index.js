/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 16;
  if (votingAge > 18) {
    console.log(true);
  } else {
    console.log(false)
  }





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

const drinkingAge = 21;

if (drinkingAge > 20){
  console.log("Legal")
} else {
  console.log("Illegal")
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var year = '1999';

var newYear = parseInt(year);
console.log(newYear);

//Task d: Write a function to multiply a*b 

let a = 2;
let b = 3;

console.log(a * b);




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let myAge = 33
let dogYears = 7

const myDogAge = function(myAge,dogYears) {
  return myAge * dogYears;}
console.log(myDogAge(myAge,dogYears))

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
let foodWeight = 0.03;
let dogWeight = 15;

const foodAmount = function(dogWeight,foodWeight) {
  return dogWeight * foodWeight;}
console.log(foodAmount(dogWeight,foodWeight))



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var meTime = Math.floor(Math.random() * 3) + 1;


if (meTime === 1) {
  console.log("Rock")
} else if (meTime === 2) {
  console.log("Scissors")
} else {
  console.log("paper")
}

//if (random(1,4) === 1){
  //console.log("rock");
//} else if (random(1,4) === 2) {
  //console.log("paper");
//} else if (random(1,3) === 3){
  //console.log("scissors");
//}
//Another method to get a random number. Can't get it to perform the if else function properly.
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const miles = 0.621;


const getMiles = function(kilos,miles){
  console.log(kilos * miles);
} 
getMiles(30,miles) 


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const cm = 30.48;

const getCm = function(feet,cm){
  console.log(feet * cm)
}

getCm(6,cm)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong() {
let firstPart = " bottles of soda on the wall, ";
let secondPart = " bottles of soda, take one down pass it around ";
let lastPart = " bottles of soda on the wall"; 
for ( let i = 99 ; i > 0 ; i-- ) {
    // declare a var | conditional expression | increment var
        console.log(i + firstPart + i + secondPart + i + lastPart);
    }
}
  annoyingSong()



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
let grade = Math.floor(Math.random() * 100) 
console.log(grade)

if (grade >= 90){
  console.log("A")
} else if (grade >= 80){
  console.log("B") 
} else if (grade >= 70) {
  console.log("C")
} else if (grade >= 60){
  console.log("D")
} else {
  console.log("F")
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






