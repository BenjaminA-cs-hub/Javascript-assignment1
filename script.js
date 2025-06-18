    //1

function myEach(array,callback){
    for(let i=0 ; i<array.length; i++)
        callback(array[i]);

}

  // 2
function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }

  //3
  function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  // 4
  function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }
  
  // 5
  function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }

  });
 
  
  // 6
  function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  

  // 7
function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

// 8
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// 9
const testArray = ["boat", "car", "plane"];

function myPush(arr, item) {
  arr[arr.length] = item;
  return arr.length; 
}

// 10
function myLastIndexOf(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}



const student = {
  firstname: 'John',
  lastname: 'Doe',
  age: 22,
  gender: 'male'
};

// 11
Object.grabKeys = function(object) {
    const keys = [];
    let i = 0;
    for (key in object) {
        keys[i] = key;
        i++;
    }
    return keys;
}
// 12

Object.grabValues = function(object) {
    const values = [];
    let i = 0;
    for (value in object) {
        values[i] = object[value];
        i++;
    }
    return values;
}

