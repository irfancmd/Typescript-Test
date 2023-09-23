/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

// TErr is as optional type and will be of type "string" by default
type Message<TBody, TErr = string> = {
  body: TBody;
  error: TErr;
};

let message1: Message<number> = {
  body: 123,
  error: "",
};
