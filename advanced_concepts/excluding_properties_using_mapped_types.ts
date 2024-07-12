/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

interface Person {
  id: number;
  name: string;
  userId: number;
  groupId: number;
  isLoggedIn: boolean;
}

// Note that template literal types almost work like regular expresson, through their syntax is javascript-like
type IdTypes = `${string}${"id" | "Id"}${string}`;

type NonIdProps<T> = {
  [PropName in keyof T as PropName extends IdTypes ? never : PropName];
};

type PersonNonIdProps = NonIdProps<Person>;
