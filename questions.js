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
    console.log(checkPrimeNumber(5));
    

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
console.log(checkCharacter("e"));



// # input
// #   list of numbers          
// #  process 
// # sort the numbers in an ascending order

// # output
// # maximum and minimum number

// Write a program that takes an array of numbers as input and finds the minimum and maximum elements.
function getNumber(numbers){
 let max=numbers[0] ;
 for(let i=1;i<numbers.length ;i++){
    if(numbers[i]=max){
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
for(let i=0;i<arr.length;i++);
if(arr.includes(num)){
    console.log(`${num} exist in the array`)
}
else{
    console.log(`${num} does not exist in the array`)
}
}
console.log(checkNumber([1,2,50,30],2));


function numberSort(array) {
    if (array.length === 1) {
      return array
    }
    const middle = Math.floor(array.length / 2)
    const leftArray = array.slice(0, middle)
    const rightArray = array.slice(middle)
    return mergeArray(
      numberSort(leftArray),
      numberSort(rightArray)
    )
  };
  // Compare the arrays item by item and return the concatenated result
  function mergeArray (leftArray, rightArray) {
      let result = []
      let indexLeft = 0
      let indexRight = 0
      while (indexLeft < leftArray.length && indexRight < rightArray.length) {
        if (leftArray[indexLeft] < rightArray[indexRight]) {
          result.push(leftArray[indexLeft])
          indexLeft++
        } else {
          result.push(rightArray[indexRight])
          indexRight++
        }
      }
      return result.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight))
    }
    const arrayOfNumbers = [2, 5, 1, 3, 7, 4, 9, 8, 6]
    console.log(numberSort(arrayOfNumbers))
  
function checkRoomAvailability(room, guestName, checkInDate, roomNumber) {
    for(i=0;i<room.length;i++);
  if (room === "unoccupied") {
      console.log(`Room ${roomNumber} is available for ${guestName} (Check-in: ${checkInDate})`);
  } else {
      console.log(`Room ${roomNumber} is unoccupied.`);
  }
}
// Example usage:
checkRoomAvailability("unoccupied", "John Doe", "2024-05-15", 101);
checkRoomAvailability("occupied", "Alice Smith", "2024-05-14", 202); 


class HotelSystem{
    constructor(){
        this.reservation=[]
    }
    makeReservation(roomNumber,guestName,checkInDate){
        this.reservation[roomNumber]={guestName,checkInDate}
        console.log(this.reservation);
        }
    getReservation (roomNumber){
    return this.reservation[roomNumber]
    }
     removeReservation(roomNumber){
         delete this.reservation[roomNumber]
         console.log(this.reservation)
     }
    }
    const bookingSystem= new HotelSystem()
    bookingSystem.makeReservation(56,'Rose Otieno', '15th May 2024')
  console.log( bookingSystem.getReservation(56))
  bookingSystem.removeReservation()



  function changeTemperature(temp){
    let new_temp=temp*(9/5)+32
    return new_temp
  }
  console.log(changeTemperature(32))



function sumOfFiveNumbers(arr){
let prompt=("Input 5 numbers");
console.log(prompt)
sum=0;
for(let i=0;i<arr.length;i++);
if(arr.length===5){
     sum+=arr[i];
     return sum;
}
else if(arr.length!==5){
    console.log("It requires more numbers")
}
else{
    return "The number does not meet the conditions";
}

  }
console.log(sumOfFiveNumbers([1,2,3,4,5]));

  function maxMin(arr){
    let arr1=arr.sort((a,b)=>a-b)
    console.log(arr1)
    const min=arr1[0]
    console.log(min)
    const max=arr1[arr1.length-1]
    console.log(max)
 }
 maxMin([1,40,6,18,10])

//  Develop a program that asks the user to enter a sentence. Your program should count and output the number of times each 
//  vowel appears in the sentence. For an additional challenge, make sure the count in case in-sensitive (e.g., ‘A’ and ‘a’ 
// are count
function countVowels(sentence){
    let vowels=['a','e','i','o','u']
    let new_Sentence=sentence.toLowerCase();
console.log(new_Sentence);
for(let i=0;i<vowels.length;i++);

}

// Create a function that takes two sorted lists as an 
// input and merges them to a sigle sorted array.
function mergeArrays(arr1,arr2){
let newArr=[];

}

// Create a javascript function that takes a string as an input and 
// returns the reverses the order of words in instanceof.
function checkWord(name){
 checkName=name.split('').reverse();
 return checkName   

}
console.log(checkWord("Mwanasha"));

// You are given an array of objects with student details:name,class,and test.Write 
// a javascript function that takes the aray as input and returns the average score

const studentDetails = [
    { name: "Amo", class: "AnitaB", test: 70 },
    { name: "Alima", class: "Lovelace", test: 65 },
    { name: "Maya", class: "AdaLab", test: 60 }
];

function getScore(arr) {
    let totalMarks = arr.reduce((a,b)=>a + b.test,0);
    let average = totalMarks / arr.length;
    return average;
}

console.log(getScore(studentDetails));

 const person={firstName:"Annah",age:30,ocuppation:"Teacher"};

function introduce() {
    return `My name is ${person.firstName},a ${person.ocuppation} and I am ${person.age} years old.`
    
}
console.log(introduce(person));
// Write a function that takes the array as input and  returns a new array 
// containing only the string that have more that 5 characters

function getWordWithMoreThan5Char(arr) {
    const newArr = [];
    for (let i=0;i< arr.length;i++) {
        if (arr[i].length > 5) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(getWordWithMoreThan5Char(["mango", "banana", "apple", "guava", "passion"]));

// 20.

//(1.)write a function that takes a list of integers as input and removes all duplicate numbers ,
// returning a list with unique numbers only
function checkDuplicate(arr){
const uniqueNumbers = [...new Set(arr)];
console.log(uniqueNumbers);
}
checkDuplicate([1,0,6,8,3,3,2,4,0,3,1]);


// 3
function countOccurence(career){
    newCareer=career.split('');
count=0;
for(let i=0;i< newCareer.length;i++);
count=+i
return count

}
console.log(countOccurence("Teacher"));

// 5.
 let books=([{title:"Born A Crime",author:"Trevor Noah",pages:288},
{title:"Blossoms of the Savannah",author:"Henry Olekulet",pages:365},
{title:"A Dolls House",author:"Henrick Ibsen",pages:264}]);

function getShortestBook(books){
    let shortestBook=books.reduce((a,b)=>a+b.pages,0)
    return shortestBook
}
console.log(getShortestBook(books));

