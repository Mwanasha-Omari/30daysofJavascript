// # input
// # an array of numbers

// #  process 
// # iterate through the numbers to get all the numbers 
// # if its divisible by both 3 and 5,3 or 5

// # output
// # if the number is divisible by both three and 5
// # it should print out fizzbuzz
// # if the number is divisible by 3 it should print out fizz
// # if the number is divisible by 5 it should print out buzz


// 1.Write a program that iterates through numbers from 1 to a given limit (e.g., 100).
// For each number: If the number is divisible by 3, print "Fizz"".
// If the number is divisible by 5, print ""Buzz"".
// If the number is divisible by both 3 and 5, print ""FizzBuzz"".
// Otherwise, print the number itself.
function getDivisibleNumber(num){
    for(let i=0;i<num.length;i++);
    if(num%3==0&&num%5==0){
        console.log("FizzBuzz")
    }
    
    else if(num%5==0){
        console.log("Buzz")
    }
    else if(num%3==0){
        console.log("Fizz")
    }
    else{
        return num
    }
    }
    console.log(getDivisibleNumber(15));
    
//      input
//  number
//   process
//    checking if the number is less than one it should print 
//  out the number is not a prime number  
//  if the number is divisible by 3 and not divisible by two the
//   number is a prime number      
//   else the number should be invalid
//  output
//  prime number
//  not a prime number
//  nimber is not valid
    
    //2. Write a program that takes a number as input and determines if it's prime.
    function checkPrimeNumber(number){
    if(number<=1){
        console.log("Not a prime number")
    }
    else if(number%2!=0 && number%3==0){
        console.log("Prime number")
    }
    else{
        console.log(" number is invalid")
    }
    }
    console.log(checkPrimeNumber(10));
    

    // # input
    // #    year            
    // #  process 
    // #  checking if the year is divisible by 4
    // # checking if the year is divisible by 400
    // # checking if the year is divisible by 100
           
    // # output
    // #  if the number is divisible by 100 400 and 4 
    // # print its a leap year  
    // # else it is not a leap year  







    // 3Write a program that takes a year as input. Check if the year is a leap year based on the following rules:
    // A year is a leap year if it is divisible by 4 but not by 100.
    // However, if the year is divisible by 100, it must also be divisible by 400 to be considered a leap year.
    function checkLeapYear(year){
        if(year%4==0)
        if(year%100==0)
        if(year%400==0){
            console.log(`${year} is a leap year`)
        }
        else{
            console.log(`${year} is a leap year`) 
        }
        else{
            console.log(`${year} is a leap year`) 
        }
        else{
            console.log(`${year} is not a leap year`) 
        }
    }
    console.log(checkLeapYear(2016));




    //  # input
//  #character
               
// #  process
// # iterating through the list of vowels checking if the character is a vowel or a consonant
// # cecking if the character is in the vowels

// # output     
// # if the character is in the list of vowel print out 
// # character is a vowel 
// # else it should print out the character is a consonant

    
// Write a program that takes a character as input. Check if the character is a vowel (a, e, i, o, u) and display "Vowel" or "Consonant" accordingly.
 function checkCharacter(char){
let vowels=['a','e','i','o','u'];
for(let i=0;i<vowels.length;i++);
if(vowels.includes(char)){
    console.log(`${char} is a vowel`)
}
else{
    console.log(`${char} is a consonant`);
}
 }
console.log(checkCharacter("b"));



// # input
// #   list of numbers          
// #  process 
// # sort the numbers in an ascending order

// # output
// # maximum and minimum number

// Write a program that takes an array of numbers as input and finds the minimum and maximum elements.
function getNumber(numbers){
 let max=numbers[0] ;
 for(i=1;i<numbers.length ;i++){
    if(numbers==max[i]){
max=numbers[i]
    }
}
  console.log(max);
}

console.log(getNumber(1,2,3,4,5));




// # input
// # a list of numbers
// #  process 
// # adding each number in the list and getting the total
// # output
// # sum of the numbers in the list

// Write a program that takes an array of numbers as input and calculates the sum of all elements.
function getTotal(arr){
    let sum=0;
for(i=0;i<arr.length;i++);
    sum=+arr[i];
    console.log(sum)
}
console.log(getTotal(1,2,3,4));





// # input
// #   list of numbers and a number 

// #  process 
// #  checking if the number is in the array
// # output
//     #  the number exists in the array

// Write a program that takes an array and a number as input and checks if the number exists in the array.
function checkNumber(arr,num){
for(i=0;i<arr.length;i++);
if(arr.includes(num)){
    console.log(`${num} exsists in the array`)
}
else{
    console.log(`${num} does not exsist in the array`)
}
}
console.log(checkNumber([1,2,50,30],2));