/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* This is how we can accept any funtion as a genric type.
   Note that ...args: any will also be valid in this case,
   but it's good to use any[] just for maintaining consistency as
   rest operator expects array type in most cases in Typescript.
*/
type ParamsAndReturn<T extends (...args: any[]) => any> = {
  parameters: Parameters<T>;
  returnType: ReturnType<T>;
};

function foo(a: number, b: string): void {
  // Do something
}

type FooParamsAndReturn = ParamsAndReturn<typeof foo>;
