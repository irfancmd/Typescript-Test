/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* As we saw from "generic_specificity_type_inference.ts" example,
   Typescript only infers generic types as literals when they are
   constrained. This applies for arrays in a wired way.
*/

// Here, we're constraining T to be type of string array
const makeStatuses = <T extends string[]>(arg1: T) => {
  return [...arg1];
};

/* Since we constrained the types, we expected the type of result1
   to be an array of ("success" | "error" | "warning" | "info"). However it's
   inferred as string array.
*/
const result1 = makeStatuses(["success", "error", "warning", "info"]);

/* To get our desired result, we have to specify type to a lower level.
   Which means, rather than constaining the type of array itself, we have to
   constrain the type of the array elements.
*/
const makeStatusesUpdated = <T extends string>(arg1: T[]) => {
  return [...arg1];
};

// Now, we're getting the expected result
const result2 = makeStatusesUpdated(["success", "error", "warning", "info"]);
