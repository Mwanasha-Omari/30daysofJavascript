// Declare a function fullName and it print out your full name.
function fullName(fullname){
  const name=fullname;
  console.log({console:name})
}

fullName("Ali Mwanasha")
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function full_name(fname,lname) {
  const name = fname+lname;
  console.log({console:name});
  return {return :name};

}
full_name("Ali"," Mwanasha")

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2){
  const sum=num1+num2;
  console.log({console:sum});
  return {return:sum}
}
addNumbers(2,3)

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
  const result=length*width
console.log({console:result});

}
areaOfRectangle(10,50)
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width){
let perimeter=(length+width)*2
console.log({console:perimeter})
}
perimeterOfRectangle(3,2)
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
let volume=length*width*height
console.log({console:volume});

}
volumeOfRectPrism(10,5,3)
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(){
const area=(3.14*3*3)
console.log({console:area});

}
areaOfCircle()
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(){
let circumference=2*3.14*3
console.log({console:circumference});
}
circumOfCircle()
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function isDensity(mass,volume){
const density=mass/volume
console.log({console:density});

}
isDensity(50,5)
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function isSpeed(totaldistance,totaltime){
let speed=totaldistance/totaltime
console.log({console:speed});
}

isSpeed(500,100)












































