/**
 *
 * Q-1: Various console methods
 *
 */

// Answer

/**
 log()
error()
warn()
clear()
time() and timeEnd()
table()
count()
 * 
 */
//  1-log()
//  Mainly used to log(print) the output to the console.
//  We can put any type inside the log(), be it a string, array, object, boolean etc.
console.log('abc');
console.log(1);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2, c: 3 });

// 2- error()
// Used to log error message to the console.
// Useful in testing of code.By default the error message will be highlighted with red color.
console.error('This is a simple error');

// 3- warn()
// Used to log warning message to the console.
// By default the warning message will be highlighted with yellow color.
console.warn('This is a warning.');

// 4- clear()
// Used to clear the console.The console will be cleared,
console.clear();

// 5-time()
// Whenever we want to know the amount of time spend by a block or a function,
//  we can make use of the time() and timeEnd() methods provided by the javascript console object.
// They take a label which must be same, and the code inside can be anything(function, object, simple console).
console.time('abc');
let fun = function () {
  console.log('fun is running');
};
let fun2 = function () {
  console.log('fun2 is running..');
};
fun();
fun2();
console.timeEnd('abc');

// 6-table()
// This method allows us to generate a table inside a console.
// The input must be an array or an object which will be shown as a table.
console.table({ a: 1, b: 2 });

// 7-count()
// This method is used to count the number that the function hit by this counting method.
for (let i = 0; i < 5; i++) {
  console.count(i);
}

// --------------------------------------------------------------------------------------------------------------------------------

/**
 * Q-2 : Diff between var , let  and const
 */

//Answer

/**
var, let and const keywords are used to declare variables in Javascript. 
While var is the oldest keyword for declaring variables from its inception, let and const are introduced in ES6.
let and var can be reassigned to a new value while const cannot be reassigned.
var is function-scoped.
let and const are block-scoped(any code within {} braces).
*/
var a = 10;
a = 20;
//output: 20
console.log(a);

let b = 'hello';
b = 'world';
//output: 'world'
console.log(b);

const c = 'hello';
//Error: Uncaught TypeError: Assignment to constant variable.
c = 'world';

// -----------------------------------------------------------------------------------------------------------------------------------

/**
 *
 * Q-3: datatypes in javascript
 */
// answer

/**
 * Number
 * The number type represents both integer and floating point numbers.
 */
let n = 123;

/**
 * String
 * A string in JavaScript must be surrounded by quotes.
 * there are 3 types of quotes.
 * Double quotes: "Hello".
 * Single quotes: 'Hello'
 * Backticks: `Hello`.
 */
let str = 'Hello';
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

/**
 * Boolean
 * The boolean type has only two values: true and false.
 */
let nameFieldChecked = true;
let ageFieldChecked = false;

/**
 * null
 * The special null value does not belong to any of the types described above.
 */
let age = null;

/**
 * Objects
 * JavaScript objects are written with curly braces {}.
 * Object properties are written as name:value pairs, separated by commas.
 */
let person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };

/**
 * Array
 * JavaScript arrays are written with square brackets.
 * Array items are separated by commas.
 */
let cars = ['Saab', 'Volvo', 'BMW'];
