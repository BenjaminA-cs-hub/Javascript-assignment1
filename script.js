// 6
function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

console.log("Myincludes function test: ")
console.log(myIncludes(["cat", "dog", "cow"], "cat"));

// 7
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log("myIndexOf() function test: ")
console.log(myIndexOf(["cat", "dog", "cow"], "dog"));

// 8
const testArray = ["boat", "car", "plane"];

function myPush(arr, item) {
  arr[arr.length] = item;
  return arr.length; 
}
console.log("myPush() function test: ")
console.log("Adding tank to ", testArray);
console.log(myPush(testArray, "tank"));

// 9
function myLastIndexOf(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numArray = [1,2,3,4,10,12];
console.log("myLastIndexOf() function test: ")
console.log("Finding index of 10 in ", numArray);
console.log(myLastIndexOf(numArray, 10));

// 10

const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};


Object.grabKeys = function(object) {
    const keys = [];
    let i = 0;
    for (key in object) {
        keys[i] = key;
        i++;
    }
    return keys;
}

console.log("grabKeys() function test: ")
console.log("Grabing keys of ", student);
console.log(Object.grabKeys(student));

Object.grabValues = function(object) {
    const values = [];
    let i = 0;
    for (value in object) {
        values[i] = object[value];
        i++;
    }
    return values;
}

console.log("grabValues() function test: ")
console.log("Grabing values of ", student);
console.log(Object.grabValues(student));