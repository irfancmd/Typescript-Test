/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* If we make a genric parameter const, whatever is passed to that parameter will become readonly. It's
   has the same effect if and object was maked with "as const" before passing to the generic paramerter.
*/

// Let's say we have this function that is supposed to any object that is passed as readyonly
const asConst = <T>(t: T) => t;

const fruits = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "orange",
    color: "orange",
  },
] as const;

// Note how "asConst" doesn't work unless we mark the object as cosnt before passing it.
const fruitConst = asConst(fruits);

// A solution to this problem is to make the generic parameter "cosnt".
const asConstUpdated = <const T>(t: T) => t;

/* Note that we won't have to mark the object "as const". But, we have to pass it as a literal
   for the function to work as expected.
*/
const fruitConstUpdated = asConstUpdated([
  {
    name: "apple",
    color: "red",
  },
  {
    name: "orange",
    color: "orange",
  },
]);
