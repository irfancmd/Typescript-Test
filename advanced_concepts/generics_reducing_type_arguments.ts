/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* Here, we're using two generic types for inferring the type of two
   object properties.
*/
const returnBothIPassIn = <T1, T2>(params: { a: T1; b: T2 }) => {
  return [params.a, params.b];
};

const result1 = returnBothIPassIn({ a: 1, b: "Hello" });

/* However, we can reduce the number of type argumets to one by using a
   composite generic type like this.
*/
const returnBothIPassInUpdated = <
  TParams extends { a: unknown; b: unknown }
>(params: {
  a: TParams["a"];
  b: TParams["b"];
}) => {
  return [params.a, params.b];
};

// The downside of this approach is we're getting an array of unknown.
const result2 = returnBothIPassInUpdated({ a: 1, b: "Hello" });
