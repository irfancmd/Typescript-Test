/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

// Let's say we have two objects and one function
const obj1 = {
  parse() {
    return "Hello";
  },
};

const foo = () => 123;

const obj2 = {
  extract() {
    return true;
  },
};

/*
  We want to make a generic type that will take objects of three forms above and will
  return the return value of the functions as type. We could do this by using long ternry
  conditional expressions, but unions are ideal choice here as they produce much more
  understandable code.
*/
type CustomReturnType<T> = T extends
  | { parse: () => infer TReturn }
  | (() => infer TReturn)
  | { extract: () => infer TReturn }
  ? TReturn
  : never;

type CusT1 = CustomReturnType<typeof obj1>;
type CusT2 = CustomReturnType<typeof foo>;
type CusT3 = CustomReturnType<typeof obj2>;
