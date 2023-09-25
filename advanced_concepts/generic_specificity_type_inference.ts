/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* If we specify the type of a generic argument, typescript will infer those types
   as literal types.
*/

/* Here, we're not limiting the Type of 'T'. So, typescript will not infer T as
   literal type.
*/
const inferItem = <T>(arg1: T) => {
  return {
    output: arg1,
  };
};

/* Here, result1 is inferred as a broad type "string", and result2 as "number".
   Note that if we use generic type in the function argument, we don't have to
   specify it using angle brackets '<>' becase Typescript will automatically
   infer it by looking at the parameters that we're passing in to the funtion.
*/
const result1 = inferItem("a");
const result2 = inferItem(123);

/* However, if we limit the argument type in generic, the types will be inferred
   as literal types.
 */
const inferItemLiteral = <T extends number | string>(arg1: T) => {
  return {
    output: arg1,
  };
};

/* Here, result1 is inferred as "a" and result2 is inferred as type "123". */
const result3 = inferItemLiteral("a");
const result4 = inferItemLiteral(123);
