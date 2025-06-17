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

console.log("MyIndexOf() function test: ")
console.log(myIndexOf(["cat", "dog", "cow"], "dog"));