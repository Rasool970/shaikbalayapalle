// 1.function curring

function f(a){
	return (b)=>{
		 return (c,d)=>{
			return a+b+c+d
		}
	}
}
let out =f(10)(20)(30,40)
console.log(out)


// 2.flatten array

let a1 = [1,[2,3,[4,5]]];
 let out1 = a1.flat(Infinity);
  console.log(out1)


// Flatten an array using recursion


  const arr = [1,[2,3,[4,5]]]

const flatten = (input)=>{
    let result = []

    if(!Array.isArray(input)) {
        return input;
    }

    for(let data of input) {
        result = result.concat(flatten(data))
    }

    return result
}

console.log(flatten(arr))

// Create a debounce function that limits the execution of a function call and waits for a certain amount of time before running it again.


function debounce(func, delay) {
    let timeoutId;
    
    return function() {
        const context = this;
        const args = arguments;
        
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

function myFunction() {
    console.log('Function executed');
}

const debouncedFunction = debounce(myFunction, 3000);

debouncedFunction(); 


// Write a throttle function that ensures a given function is only called at most once in a specified time period.

function throttle(func, delay) {
    let isThrottled = false;
    
    return function() {
        const context = this;
        const args = arguments;
        
        if (!isThrottled) {
            func.apply(context, args);
            isThrottled = true;
            setTimeout(function() {
                isThrottled = false;
            }, delay);
        }
    };
}

function myFunction() {
    console.log('Function executed');
}
const throttledFunction = throttle(myFunction, 3000); 

throttledFunction();
throttledFunction(); 



// Write a function chunk that splits an array into subarrays of specified length.


function chunk(arr, size) {
    const chunks = [];
    
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    
    return chunks;
}

const arrayS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = chunk(arrayS, 3); 
console.log(chunkedArray); 

// Create a function deepEqual that compares two values deeply, checking if they are equal in value and structure.
function deepEqual(a, b) {
    if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }
        
        for (let key of keysA) {
            if (keysB.includes(key)) {
                if (!deepEqual(a[key], b[key])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        
        return true;
    } else {
    
        return a === b;
    }
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2)); 

const arr1 = [1, 2, { a: 3 }];
const arr2 = [1, 2, { a: 3 }];
console.log(deepEqual(arr1, arr2)); 

console.log(deepEqual(obj1, { a: 1, b: { c: 3 } })); 


// Implement your own bind function that replicates the functionality of JavaScript's native Function.prototype.bind.

function customBind(func, context) {
    const boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
        const args = Array.prototype.slice.call(arguments);
        return func.apply(context, boundArgs.concat(args));
    };
}
const obj = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

const boundGetX = customBind(obj.getX, obj);
console.log(boundGetX()); 

// Write a function unique that returns a new array with only the unique elements from the original array.
function unique(arr) {
    return Array.from(new Set(arr));
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = unique(originalArray);
console.log(uniqueArray);

// Implement a function intersection that finds the intersection of two arrays, returning an array with elements that appear in both.

function intersection(arr3, arr4) {
    const set1 = new Set(arr3);
    const set2 = new Set(arr4);
    const intersect = [];
    
    for (let item of set1) {
        if (set2.has(item)) {
            intersect.push(item);
        }
    }
    
    return intersect;
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [3, 4, 5, 6, 7];
const result = intersection(arr3, arr4);
console.log(result); 



// Write a custom filter function that mimics the behavior of the native Array.prototype.filter method.

function customFilter(arr, callback) {
    const filteredArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    
    return filteredArray;
}

const number = [1, 2, 3, 4, 5];
const evenNumbers = customFilter(number, function(item) {
    return item % 2 === 0;
});

console.log(evenNumbers)


// Create your own version of the reduce method called myReduce that mimics the behavior of the native Array.prototype.reduce.
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < arr.length; i++) {
        if (accumulator === undefined) {
            accumulator = arr[i];
        } else {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }

    return accumulator;
}
const numbers = [1, 2, 3, 4, 5];
const sum = myReduce(numbers, function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

const max = myReduce(numbers, function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
});

console.log(max); 


// Write a function permute that returns all possible permutations of the elements in an array.
function permute(arr) {
    const result = [];
    function generatePermutations(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                generatePermutations([...current, remaining[i]], newRemaining);
            }
        }
    }

    generatePermutations([], arr);

    return result;
}

const array = [1, 2, 3];
const permutations = permute(array);
console.log(permutations);

// Implement a function rotateArray that rotates an array to the right by a given number of steps.
function rotateArray(arr, steps) {
    const effectiveSteps = steps % arr.length;
    const rotatedArray = arr.slice(-effectiveSteps).concat(arr.slice(0, arr.length - effectiveSteps));

    return rotatedArray;
}
const array1 = [1, 2, 3, 4, 5];
const steps = 2;
const rotatedArray = rotateArray(array1, steps);
console.log(rotatedArray);

// Write a function isBalanced that takes a string containing only parentheses and checks if they are balanced.
function isBalanced(str) {
    const stack = [];

    const parenthesesMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== parenthesesMap[last]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalanced("()")); 
console.log(isBalanced("()[]{}"));
console.log(isBalanced("(]")); 
console.log(isBalanced("([)]")); 
console.log(isBalanced("{[]}"));

// Create a function mergeIntervals that merges all overlapping intervals in an array of interval pairs.
function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals));


// Implement a function nestedSum that calculates the sum of all numbers in a nested array, regardless of how deep the array is.
function nestedSum(arr) {
    let sum = 0
    function sumHelper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                sumHelper(arr[i]);
            } else if (typeof arr[i] === 'number') {
                sum += arr[i];
            }
        }
    }
    sumHelper(arr);

    return sum;
}
const nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8], 9]];
console.log(nestedSum(nestedArray));


// Implement a function calcLetters that calculates and resturns the sum of all repeated characters in an strings.


let ss="INDIA IS A GRATE COUNTRY";
let s1=ss.split('')
// console.log(s1)
result1 ={}
for(let j=0;j<s1.length;j++){
  if(!result1[s1[j]])
    result1[s1[j]]=0
  ++result1[s1[j]]
}
console.log(result1)