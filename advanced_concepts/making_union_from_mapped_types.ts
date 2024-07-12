/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We want to create an union of key and value types of this interface,
   like [id, number] | [name, string] | [isLoggedIn, boolean]
*/
interface Person {
  id: number;
  name: string;
  isLoggedIn: boolean;
}

// We can achieve tha by re-indexing a type object with it's own keys
type KeyValueUnion<T> = {
  [PropName in keyof T]: [PropName, T[PropName]];
}[keyof T];

type PersonKeyValueUnion = KeyValueUnion<Person>;
