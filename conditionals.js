// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age=20


const information=(age)=>{
if(age>=18){
    console.log('You are old enough to drive.');
}
else if(age==15){
console.log('You are left with 3 years to drive.');

}
else{
console.log('You are not allowed to drive');

}


}
 information()



//  Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge=20
const compare=(age)=>{
if(myAge<=age){
    console.log('I am older than you')
}
else{
    console.log('You are younger than me')
}



}
compare();


 


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
 let a=5
     let b=8
     if(a>b){console.log('a is greater than b')}
     else{console.log('a is less than b')}


function returncheck(){
   let a=5
    let b=8
   if(a>b){console.log('a is greater than b')
 return 'a is greater than b'}
  else{console.log('a is less than b')
return 'a is less tha b'}
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num=7

const isEven=(number)=>{
if(number%2==0){
    console.log('Even number')
}
else{
console.log('not even')}


}
isEven();

// Write a code which can give grades to students according to theirs scores:
  let grade=90
function grading(){
if(grade>=80){
    console.log('A')

}
else if(grade<=70){
console.log('B')

}
else if(grade>=70){
    console.log('C')

}
else if(grade<=60){
console.log('D')

}
else{
    console.log('F')
}

};
grading()



// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month ="December"

const season =(month)=>{
if(month=="september"||"October"||"November"){
console.log('Autumn')

}
else if(month=="February"||"January"||"December"){
    console.log('Winter')
}
else if(month=="May"||"April"||"March")
{
    console.log('Spring')
}
else(month=="June"||"July"||"August")
{
    console.log('Summer')
}


}

season();






// Check if a day is weekend day or a working day. Your script will take day as an input.

const greeting=(dayOfTheWeek)=>{
    switch (dayOfTheWeek) {
      case"Sunday":
console.log("Today is aweekend");
    break;

  case"Tuesday":

    console.log("Today is a working day");
    break;
case"Wednesday":
console.log("Today is a working day");
break;
    case"Saturday":
    console.log("Hello Saturday");
    break;
    default:
        console.log('Invalid day of the week')
}
};
greeting('Wednesday')