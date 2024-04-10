// Declare an empty array;
let name=[]


// Declare an array with more than 5 number of elements
const arr=['a','b','c','d','e','f','g']


// Find the length of your array
console.log(arr.length)

// Get the first item, the middle item and the last item of the array
console.log(arr[0])
console.log(arr[3])
console.log(arr[6])


// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arrMixeddataTypes=["Asha",7,,'a',20.5,10,"Kenya",2]
console.log(arrMixeddataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])


// Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[5])
console.log(itCompanies[6])



// Sort the array using sort() method
console.log( itCompanies.sort());


// Reverse the array using reverse() method

console.log( itCompanies.reverse());



// Slice out the first 3 companies from the array

console.log( itCompanies.slice(0,4));


// Slice out the last 3 companies from the array
console.log( itCompanies.slice(4,6));


// Slice out the middle IT company or companies from the array

console.log( itCompanies.slice(4,5));


// Remove the first IT company from the array
console.log( itCompanies.slice(0));


// Remove the middle IT company or companies from the array
console.log( itCompanies.slice(4));



// Remove the last IT company from the array
console.log( itCompanies.slice(0,6));


// Remove all IT companies
console.log( itCompanies.slice(7));
