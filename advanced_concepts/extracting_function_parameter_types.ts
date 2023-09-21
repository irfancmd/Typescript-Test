/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

function foo(a: string, b: number, c: boolean = true): void {
  // Do Something
}

/* This will return a tuple who's type matches that of the parameter list
   of the given function. Note that how 'c' is types as boolean | undefined as it
   is an optional parameter.
*/
type foo_params = Parameters<typeof foo>;

// Now, we can use this tuple for any purpose we w
let tuple1: foo_params = ["Hello", 123, true];

console.log(tuple1);
