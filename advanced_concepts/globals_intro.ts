/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* Anything we put in a Typescript global scope will be accessible
   throughout all files in a project. Declaring variable or function
   types in global scopes are useful when we have to declare types for
   libraries that don't support Typescript out of the box.
*/
declare global {
  // We cannot use "let" or "const" in global scope
  var randomVariable: string;

  function libraryFunction(): string;
}

/* Now, were mapping the global function type to an actual function.
   This can be a function from a third party library or a function of our own.
   We can use "globalThis" to access these global properties/functions.
*/
globalThis.libraryFunction = () => "Hello World!";
