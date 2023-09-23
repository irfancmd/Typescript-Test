/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* If we want to accept any type except null and undefined in a generic,
   we do so by accepting children of the empty object type. Empty object represents
   any object that is not null or undefined.
*/
type NotNullOrUndefined<T extends {}> = T;

type StringNotNullOrUndefined = NotNullOrUndefined<string>;
