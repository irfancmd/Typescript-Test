/// <reference types="node" />

/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* Here, we'll add add add a type for our own environment variable
   by extending a built-in interafce of NodeJS.
*/
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_VARIABLE: string;
    }
  }
}

// Now, we can use that environment variable with type safety
process.env.MY_VARIABLE = "Any string value";
// process.env.MY_VARIABLE = 123; // This will cause error
process.env.MY_VARIABLE = "Hello World!";
