

// write a function to generate below pattern

let num = 1;
for (let i = 1; i <= 5; i++) {

let row = "";
for (let j = 0; j < i; j++) {

row += num + " ";

num++;

}

console.log(row);

}


// Find a 2nd maximum and Minimum number in an array 

let x = [-100,70,-40,20,60,50,10,47]
x.sort()
console.log(x)
console.log(`the second largest num is ${x[x.length-2]}`)
console.log(`the second smallest number is ${x[1]}`)
console.log(`the largest number is ${x[x.length-1]}`)
console.log(`the smallest number is ${x[0]}`)



 // write a function to remove the duplicate element from an array
 
let y=[1,2,3,4,2,3,4,5]
function f(y){
	return y.filter((b,c)=>y.indexOf(b)===c)
}
console.log(f(y))



 // write a function to remove duplicate elements in a string "HelloWorld"

 
 let x1 = "HelloWorld"
 let y1= x1.split('')
 console.log(y1)
 function f1(y1){
 	let out =  y1.filter((a,b)=>y1.indexOf(a)===b)
 	return out
 }
 let out1 = f(y1)
 console.log(out1.join(''))

  // Write function to convert camelCase to snake_case
  let x2='GoodMorningToAll'
  let y2 =x2.split(/(?=[A-Z])/)
  console.log(y2)
  let z2 = y2.join('_')
  console.log(z2)
  console.log(z2.toLowerCase())

  // write a function to conver snake_case to camelCase

  function snakeToCamelCase(str) {
    return str.replace(/_([a-z])/g, function(match, group) {
        return group.toUpperCase();
    });
}
console.log(snakeToCamelCase("hello_world")); 

   // write a function to flatten the nested array

  function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log(flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))



//  // program for adding zeros after 3 values in array 

let a1=[1,2,3,4,5,6,7,8,9]
let a2 =[]
a2.push(1,2,3,0,4,5,6,0,7,8,9,0)
console.log(a2)


 // Reverse a string a without using built in method 

 function string(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(string("welcome to india"))


// // Write a function to return a fibonacci series

 let number1 =9

let n1 = 0, n2 = 1, n3;

for (let i = 1; i <= number1; i++) {
   console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
     
}


 // write a function to find how many times an elements are repeated in an array 
a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
result = { };
for(var i = 0; i < a.length; ++i) {
    if(!result[a[i]])
        result[a[i]] = 0;
    ++result[a[i]];
}
console.log(result)


let ss="ABRACADABRA";
let s1=ss.split('')
// console.log(s1)
result1 ={}
for(let j=0;j<s1.length;j++){
  if(!result1[s1[j]])
    result1[s1[j]]=0
  ++result1[s1[j]]
}
console.log(result1)

// // write a function to capitalize the each words first letter to capital 

const mySentence = "india is my country";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(words)


//  // write a function to calculate the sum of total marks in an array of object

let result2 = [];
let students = [{name: "Sham",sub: {math: 95,eng: 90,science: 99}},{name: "Peter",sub:{math: 80,eng: 70,science: 60}},{name: "Bob",sub:{math:70,eng:75,science:95}}];

students.forEach( student => {
  result2.push({
    name: student.name,
    marks: Object.values(student.sub).reduce((a, b) => a + b)
  })
});

console.log(result2)

// // Write a function to remove the duplicate from 2 arrays


function fan(arr1, arr2){

    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
            
        }
       
    }
    console.log(uniqueArr);
}
let array1 = [1,2,3,4,5];
let array2 = [5,3,7,8,9];
console.log(fan(array1,array2))


// // Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    const clone = Array.isArray(obj) ? [] : {};
  
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    
    return clone;
}
const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, { e: 5 }]
    }
};

const clonedObj = deepClone(originalObj);
console.log(clonedObj);