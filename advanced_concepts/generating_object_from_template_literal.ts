/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

type Color = "red" | "blue" | "green";

// We'll create a permutation of colors using a type literal
type ColorCombination = `${Color} with ${Color} border`;

/*
  Now, we want to generate a object type using ColorCombination as keys and type string
  as value. We can do so by using the "Record" utility type.
*/
type ColorCombinationDescription = Record<ColorCombination, string>;

// We can also transform the case of key names if we want like this
type ColorCombinationDescriptionUpper = Record<
  Uppercase<ColorCombination>,
  string
>;
