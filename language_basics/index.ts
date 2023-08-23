import { printSectionHeader, printSectionEnd } from "./utils";

printSectionHeader("Declaring Variables and Constants");
/*
  Specifying types like this is optional while declaring
  variables as Typescript can automatically infer them. One the
  type is assigned, it cannot be changed. It is however, recommended
  to just specify the type for clarity whenever possible.
*/
const userName: string = "Akkas Ali";
console.log(userName);

printSectionEnd();

printSectionHeader("Defining types using interfaes");
/*
  Interface are one way (and recommended) way of
  defining custom types. Unlike most other OOP languages,
  interfaces in TypeScript define specification/schema for
  "objects", NOT "classes". So, interfaces can be used with or
  without classes.
*/
interface Shape {
  color: string;
  isVisible: boolean;
}

/*
  Here we're using the interface in an object that doesn't belong
  to any of our defined class
*/
const shape1: Shape = {
  color: "green",
  isVisible: true,
};

console.log(shape1);

/*
  Now, we're declaring a class. note that this class follows
  the same structure that the interface had but there is no reference
  to that interface whatsoever. This is because, interfaces are schemas
  for "objects", NOT "classes".
*/
class ShapeClass {
  color: string;
  isVisible: boolean;

  constructor(color: string, isVisible: boolean) {
    this.color = color;
    this.isVisible = isVisible;

    console.log("Created an object of ShapeClass");
  }
}

/*
  Here, we're using that schema while creating an object
*/
const shapeObj1: Shape = new ShapeClass("Lime", true);

console.log(shapeObj1);

printSectionEnd();

printSectionHeader("Composing Types using union");

/*
  In Typescript, we can merge several built-in types to create compose types. We can
  do it by using either union or generics. In this section union is demonstrated.
*/
