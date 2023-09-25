/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* If we try to use generics on a curry function like this,
   only the first generic type will be inferred and rest will
   remain "unknown".
*/
const curryFunction = <T, U, V>(t: T) => {
  return (u: U) => {
    return (v: V) => {
      return {
        t,
        u,
        v,
      };
    };
  };
};

const result1 = curryFunction(1)(2)(3);

/* To use generic with curry function properly, we have to put generic
   types of respective function within their own signature, not in the top level
   function.
*/
const curryFunctionUpdated = <T>(t: T) => {
  return <U>(u: U) => {
    return <V>(v: V) => {
      return {
        t,
        u,
        v,
      };
    };
  };
};

const result2 = curryFunctionUpdated(1)(2)(3);
