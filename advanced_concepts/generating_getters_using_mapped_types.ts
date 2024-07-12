/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

interface Person {
  id: number;
  name: string;
  isLoggedIn: boolean;
}

type t = "Hello" & string;

type Getters<T> = {
  /* Capitalize only recieves types that extends string. Though, PopName doesn't extend string
     we can create a new intersection type that tells Typescript that we're passing a type that
     satisfies the specification of both PropName and string. Thus, this new type actually extends
     string as it should satistfy the specification to be a string. By doing so, we can pass our
     PropName to Capitalize. Note that we're doing this because we're sure PropName is string data
     and it should not cause problems.
  */
  [PropName in keyof T as `get${Capitalize<
    PropName & string
  >}`]: () => T[PropName];
};

/* Here is a more consise and recommended way of doing that usign conditional types.
   Any properties that will fall on never branch will be ignored.
*/
type GettersUpdated<T> = {
  [PropName in keyof T as PropName extends string
    ? `get${Capitalize<PropName>}`
    : never]: () => T[PropName];
};

type PersonGetter = GettersUpdated<Person>;
