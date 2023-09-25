/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* Even through Typescript can infer function generic types by looking
   at function parameters, it doesn't work when we try to partially specify
   these generic types ourselves. The function below has two generic types.
*/
const foo = <T1, T2>(a: T1, b: T2) => {
  // Do Something
};

/* If we try to specify one of these generic types, we get an error. So, either
   we have to specify both, or we cannot specify them and let Typescript infer
   them itself.
*/
// foo<string>(1, "Hello");

/* However, we can get around this and partially specify generic tyeps using
   factory functions like this. Here, The top level function handles one of the generics.
 */
const makeFoo =
  <T1>() =>
  <T2>(a: T1, b: T2) => {
    // Do Something
  };

const foo1 = makeFoo<string>();

/* Now, we can specify only one generic type as the other one was handled by
   the factory function.
*/
const result1 = foo1<number>("Hello", 1);
