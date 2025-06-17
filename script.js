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


const testArray = ["boat", "car", "plane"];

function myPush(arr, item) {
  arr[arr.length] = item;
  return arr; 
}
console.log("myPush() function test: ")
console.log("Adding tank to " + testArray);
console.log(myPush(testArray, "tank"));