// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a,b){
    // Your answer here
    return Math.max(a,b);
}

console.log(max(2,3));
console.log('------------------------');
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a,b,c){
    // Your answer here
    return Math.max(a,b,c);
}

console.log(maxOfThree(2,3,7));
console.log('------------------------');
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
      return true;
    } else {
      false;
    }
}

console.log(isVowel('a'));
console.log('------------------------');

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a,b) {
  return a + b;
}

console.log(sum(2,2));
console.log('------------------------');

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(a,b,c) {
  return (a + b + c) / 3;
}

console.log(avg(3,9,12));
console.log('------------------------');

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(str) {
  return str.length;
}

// to check is lengthValidator is running correctly
console.log(getLength('Bob'));
console.log('------------------------');


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(a,b) {

  if (a < b) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(2,7));
console.log('------------------------');

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
    return 'Hello, ' + name;
}



console.log(greet('Will'));
console.log('------------------------');

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madLib(word1, word2, word3, word4) {
  return 'You only ' + word1 + " " + word2 + " " + word3 + " , " + word4;
}

console.log(madLib('live', 'once', 'so', 'YOLO'));
console.log('------------------------');
