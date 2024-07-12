/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

type message = { id: number; messageBody: string };

/*
  We have a function that returns a promise
*/
function foo(): Promise<message> {
  return Promise.resolve({
    id: 1,
    messageBody: "Hello World!",
  });
}

/*
  Let's see what happens if we extract the return type of foo.
  It turns out that the return type is a Promise, not "message".
*/
type foo_type = ReturnType<typeof foo>;

/*
  If we want to extaract the awaited type "message", we have to
  use the "Awaited" utility type.
*/
type foo_awaited_type = Awaited<ReturnType<typeof foo>>;

// As we can see, foo_awaited_type is equivalent to "message"
const message2: foo_awaited_type = { id: 2, messageBody: "Hello Again!" };

console.log(message2);
