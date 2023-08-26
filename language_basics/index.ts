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
  In Typescript, we can merge several built-in types to compose new types. We can
  do it by using either union or generics. In this section union is demonstrated.
  Unions are represented by the '|' symbol
*/

// The type "MyBoolean" can contain either "true" or "false" value
type MyBoolean = true | false;
const mBool1: MyBoolean = true;

type WindowState = "open" | "closed" | "minimized";
const windowState1: WindowState = "open";

type PosittiveOddNumber = 1 | 3 | 5 | 7 | 9;
const pon1: PosittiveOddNumber = 5;

/*
  We can also use unions for handling multiple types
*/
function getLength(obj: string | string[]): number {
  return obj.length;
}

console.log("String Length:", getLength("Akkas Ali"));
console.log("Array Length:", getLength(["a", "k", "k", "a", "s"]));

printSectionEnd();

printSectionHeader("Composing Custom Types Using Generics");

type NumberArray = Array<number>;
type StringArray = Array<string>;

/*
  Generics can take objects as well. In this case all members of the array must follow
  the schema defined in the object
*/
type ArrayOfObjectsWithNameProperty = Array<{ name: string }>;

const arrWN1: ArrayOfObjectsWithNameProperty = [];
arrWN1.push({
  name: "Akkas Ali",
});

console.log(arrWN1);

printSectionEnd();

printSectionHeader("Creating Our Own Types That Use Generics");

/*
  We can create our own types that leverage generics.
*/
interface BackPack<Type> {
  container: Array<Type>;
  addItem: (obj: Type) => void;
  getItemAt: (index: number) => Type | null;
}

class BackPackClass<Type> {
  container: Array<Type> = [];

  addItem(obj: Type): void {
    this.container.push(obj);
  }

  getItemAt(index: number): Type | null {
    if (index < this.container.length) {
      return this.container[index];
    }

    return null;
  }
}

const backBack1: BackPack<string> = new BackPackClass<string>();
backBack1.addItem("Apple");
backBack1.addItem("Peach");

console.log(backBack1.getItemAt(1));

printSectionHeader("Duck Typing and The 'declare' Keyword");

/*
  Typescript uses a hierarchial type system known as Duck Typing where it determines
  an object's type by looking at its structure. So even if an object don't have any
  typed associated with it, if its structure matches that of an existing type, the
  objet will be automatically be regarded to be of that type. This however may not
  work if we're working with javascript libraries without typescript support.
  When working with plain javascript or javascript libraries alongside typescript,
  typescript compiler may thorw error if it cannot determine the type of an object
  from that javascript code. In such cares, we can declare the type for that object
  using declare keyword and tell typescript to consider our declared type as the type
  of that object.
*/

// Let's create a plain javascript object for example.
let plainJavascriptObj = {
  userName: "Akkas Ali",
  age: 25,
};

// Let's create a type "Person"
interface Person {
  userName: string;
  age: number;
}

// Now let's create a typescript function that only accepts objects of a certain type
function printPersonInfo(person: Person): void {
  console.log(person);
}

/*
  Note that even through we didn't associate any type with plainJavascriptObj,
  it can be successfully passes pass in the printPersonInfo function as a parameter,
  which only accepts an object of "Person" type. This is because plainJavascriptObj
  and Person type have the same structure
*/
printPersonInfo(plainJavascriptObj);

/*
  Though this type system worked for our own code, it may not work for javascript
  objects from external javascript libraries without typescript package. In such
  cases, we have to use the "declare" keyword
*/

/*
  Here, we'll declare the type for javascript's built-in setTimeout function.
  The setTimeout() function in nodejs returns a TimeOut object unlike
  window.setTimeout() functoin which returns an integer timeout id.
  Explicit type declaratoin isn't necessary for this function but doing this
  just for demonstration.
*/
declare const setTimeout: (callback: any, timeout: number) => object;

// const timeoutId = setTimeout(() => {
//   console.log("Hello World!");
// }, 1000);

// console.log("Timeout ID: ", timeoutId);

/*
  While matching interface type, an object doesn't need to fully comply with the
  type structure. If the type schema is followd by a "Subset" of the object's properties,
  that object would be considered of that type. So, apart form statisfying interface
  requirements, an object can have additional properties.
*/

/*
  This object has an additional "country" property that the interface "Person"
  doesn't have. Yet it can be associated with type "Person" because it satisfies the
  interface because of having "userName" and "age" property. Note that we're not
  explicitly associating the type because that would require the object to fully
  comply with the interface specification
*/
const person2 = {
  userName: "Motin Ali",
  age: 27,
  country: "Bangladesh",
};

/*
  Even though this function only takes Person type, we can pass person2 in it
  because a subset of person2's properties are compatible with Person Type
*/
printPersonInfo(person2);

/*
  Because of the above charecteristic, an "empty" object
  can be a valid type in Typescript that accepts any object
*/

interface Empty {}

const emO1: Empty = {};
const emO2: Empty = { title: "Random Object" };

printSectionEnd();

printSectionHeader("Eased Stuctural Types");

/*
  Because of the subset matching rule described in the previous section while associating
  types, an object can belong to multiple types in Typescript
*/

interface Employee {
  employeeID: number;
}

/*
  We won't explicitly type emp1 as a subset of it's propeties comply with previously
  declared types.
*/
const emp1 = {
  userName: "John Doe",
  age: 25,
  employeeID: 5,
};

// We can pass it to functions designed for Person as we saw in the previous section
printPersonInfo(emp1);

// We can also pass it to funtions designed for Employee
function printEmployeeInfo(employee: Employee): void {
  console.log(employee);
}

printEmployeeInfo(emp1);

printSectionEnd();

printSectionHeader("Literals as Types");

/*
  In typescript, literals can be used as type. The following funtion only accepts strings
  that have the value "Hello World"
*/
function printHelloWorld(str: "Hello World"): void {
  console.log(str);
}

printHelloWorld("Hello World");
