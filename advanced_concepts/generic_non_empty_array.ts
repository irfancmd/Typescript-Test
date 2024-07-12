/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

type NonEmptyArray<T> = [T, ...T[]];

type NonEmptyStringArray = NonEmptyArray<string>;

let arr1: NonEmptyStringArray = ["Hello"];
let arr2: NonEmptyStringArray = ["Apple", "Banana", "Orange", "Grape", "Peach"];
