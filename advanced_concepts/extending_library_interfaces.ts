/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/*
  In a previous lesson, we saw how to extend library types by adding
  our own functions to them by using "declare global". In this lesson,
  we'll see how to extend library interfaces to add many features to an
  existing library interface at once.
*/

// We want to add these functions to the "Window" interface
const addToWindow = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

declare global {
  type NewFeaturesType = typeof addToWindow;

  // We're extending the window interface, and thus adding all the features above at once
  interface Window extends NewFeaturesType {}
}

// Now we can use our own features
const result = window.add(4, 5);
