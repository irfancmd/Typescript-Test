/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

// Let's create an object
const person1 = {
  fullName: "Bob Doe",
  age: 31,
};

/*
  Now, if we want to extract person 1's full name as a distinct type through type index signature,
  we cannot do it normally as Typescript thinks that values of an object's properties can change
  in future. So, it infers the type below as "string" instead which is not what we want
*/
type person1FullName = (typeof person1)["fullName"];

/*
  To extract "Bob Doe" itself as a type, we have to tell Typescript that the object will not change
  in future. We can do so by using the "as const" keyword while declaring an object.
*/
const person1Updated = {
  fullName: "Bob Doe",
  age: 31,
} as const;

// Now, we can extract "Bob Doe" as a type
type person1FullNameUpdated = (typeof person1Updated)["fullName"];

/*
  Note that this may seem to do the same operation as Object.freeze which also marks the object's properties as
  read only. However, Object.freeze doesn't make nested object's properties readonly, which "as const" doesn. So,
  it's recommended to use "as const".
*/
