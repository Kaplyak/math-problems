/*
    PROBLEM 4

    A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

    012 021 102 120 201 210

    What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function permutate(n, array) {
  const arrayLength = array.length;

  for (let i = 0; i < n - 1; i++) {
    let k, l;

    for (let j = 0; j < arrayLength - 1; j++) {
      if (array[j] < array[j + 1]) {
        k = j;
      }
    }

    for (let j = k; j < arrayLength; j++) {
      if (array[k] < array[j]) {
        l = j;
      }
    }

    let tmp = array[k];
    array[k] = array[l];
    array[l] = tmp;
    let begin = k + 1;
    let end = arrayLength - 1;
    
    while (begin < end) {
      tmp = array[begin];
      array[begin] = array[end];
      array[end] = tmp;
      begin += 1;
      end -= 1;
    }
  }

  return array;
}

console.log(permutate(1000000, digits).join(""))

// Solution: 2783915460