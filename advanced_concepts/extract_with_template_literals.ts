/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/*
  Template literal types are discussed in the "language_basics" section. In this section, we'll
  see how to use extract with template literal types.
 */

// We have a type of possible routes
type Routes = "/" | "/uses" | "/users/:id" | "/products" | "/products/:id";

/*
  Now, we want to extract only dynamic routes. We can do so by this.
  It will match all strings separated by a colon.
*/
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;

let dr1: DynamicRoutes = "/users/:id";
