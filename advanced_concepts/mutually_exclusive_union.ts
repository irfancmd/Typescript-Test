/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We want to build a mutually exclusive union from the keyname
   and type of this interface.
*/
interface Person {
  id: number;
  name: string;
  isLoggedIn: boolean;
}

type MutualyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type MutuallyExclusivePerson = MutualyExclusive<Person>;
