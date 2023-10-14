/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/**
 * A narrow identity funciton will take any object and return and transform it into
 * a cosntant object that can be used as literal type.
 */

// We want to make a narrow function just for "fruits"
const narrowFruits = <N extends string, C extends string>(
  t: ReadonlyArray<{ name: N; color: C }>
) => t;

const fruits = narrowFruits([
  {
    name: "Apple",
    color: "red",
  },
  {
    name: "Orange",
    color: "orange",
  },
]);

// fruits.push({}) This won't work as fruits has become readonly

// Nobody will be allowed to use wrong information in the object literal. That's why this will throw error.
// const fruits2 = narrowFruits({
//   {
//     name: "Cherry", //     color: "red"
//   }
// });
