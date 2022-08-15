/*
    PROBLEM 1

    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2.

    For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.

    Find the product abc.
*/

function pythagoreanTriplet() {
  for (let a = 1; a < 500; a++) {
    for (let b = a; b < 1000; b++) {
      let c = Math.sqrt(a**2 + b**2);
            
      if (a + b + c == 1000) {
        return a * b * c;
      }
    }
  }
}

console.log(pythagoreanTriplet(1000000));

// Solution: 31875000
// Triplet: a = 200, b = 375, c = 425