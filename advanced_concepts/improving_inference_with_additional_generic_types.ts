/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We want this funtion to return the value of an object property
   with appropriate type
*/
const getValue = <TObj>(obj: TObj, key: keyof TObj) => {
  return obj[key];
};

const obj1 = {
  name: "Akkas",
  age: 25,
  isLoggedIn: true,
};

/* However, v1 is typed as union of possible property values, because the
   "keyof" that we used as parameter type represens a union of all possible
   types of properties.
*/
const v1 = getValue(obj1, "name");

/* We can add additonal generic argument to narrow the type of keys. In this case,
   it will be from union to a specific key.
*/
const getValueUpdated = <TObj, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey
) => {
  return obj[key];
};

// Now, the function is working as expected.
const v2 = getValueUpdated(obj1, "name");
