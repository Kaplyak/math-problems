/*
  PROBLEM 5

  The numbers, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

  THere are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

  How many circular primes are there below one million?    
*/

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function isCircularPrime(number) {
  let rotations = generateRotations(number);

  for (let i = 0; i < rotations.length; i++) {
    if (!isPrime(rotations[i])) {
      return false;
    }
  }

  return true;
}

function countCircularPrimes(max) {
  let count = 0;

  for (let i = 2; i < max; i++) {
    if (isCircularPrime(i)) {
      count++;
      list.push(i);
    }
  }

  return count;
}


function generateRotations(number) {
  let rotations = [number];

  let tmp = "" + number;
  let len = tmp.length;
  tmp += tmp;

  for(let i = 1; i * 2 < tmp.length; i++) {
    rotations.push(Number(tmp.slice(i, i + len)));
  }

  return rotations;
}

console.log(countCircularPrimes(1000000))

// Solution: 55