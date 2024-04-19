// Create an empty object called dog
const dog=[{}]


// Print the the dog object on the console
console.log({dog});
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const animal={name:'Alen',
legs:'4',
color:'brown',
 bark:'woof woof',
 age:'25',
 getDogInfo:{
    dog: 'breed',
 },
};

console.log({bark:animal.bark});

// Get name, legs, color, age and bark value from the dog object

const values=Object.values(animal);
 console.log({values});


// Set new properties the dog object: breed, getDogInfo


// EXECISE 2


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40,
     
      }
    }
  

// Find the person who has many skills in the users object.
 
// Count logged in users, count users having greater than equal to 50 points from the following object.


//   Find people who are MERN stack developer from the users object

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object
const keys=Object.keys(users);
console.log({keys});