/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We can use reversed mapped types by using mapped types in identity functions.
   Here, we're using a mapped type using the properties of the generic object itself
*/
function makeEventHandlers<TObj>(obj: {
  [K in keyof TObj]: (arg: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  // Note how eventName is of type "click"
  click: (eventName) => {},
  // Note how eventName is of type "focus"
  focus: (eventName) => {},
});
