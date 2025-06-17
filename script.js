//Myeach

function myEach(array,callback){
    for(let i=0 ; i<array.length; i++)
        callback(array[i]);

}

myEach([10, 20, 30], function(num) {
    console.log(num);
  });

  // myMap
function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  const numbersA = [1, 2, 3, 4, 5];
  const doubled = myMap(numbersA, function(num) {
    return num * 2;
  });
  console.log('myMap:', doubled); // [2, 4, 6, 8, 10]
  
  // myFilter
  function myFilter(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
  const numbersB = [1, 2, 3, 4, 5];
  const evens = myFilter(numbersB, function(num) {
    return num % 2 === 0;
  });
  console.log('myFilter:', evens); // [2, 4]
  
  // mySome
  function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return true;
      }
    }
    return false;
  }
  
  const numbersC = [1, 2, 3, 4, 5];
  const hasEven = mySome(numbersC, function(num) {
    return num % 2 === 0;
  });
  console.log('mySome:', hasEven); // true
  
  // myEvery
  function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i], i, array)) {
        return false;
      }
    }
    return true;
  }
  
  const numbersD = [2, 4, 6, 8, 10];
  const allEven = myEvery(numbersD, function(num) {
    return num % 2 === 0;
  });
  console.log('myEvery:', allEven); // true
  
  // myReduce
  function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
  
  const numbersE = [1, 2, 3, 4, 5];
  const total = myReduce(numbersE, function(acc, num) {
    return acc + num;
  }, 0);
  console.log('myReduce:', total); // 15
  