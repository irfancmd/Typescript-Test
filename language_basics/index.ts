import { printSectionHeader, printSectionEnd } from "./utils.js";

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
  interfaces in TypeScript can define specification/schema for
  "objects", apart from "classes". So, interfaces can be used with or
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
  to that interface whatsoever.
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

/*
  Interfaces can also define schema for classes using
  the "implements" keyword. A class can implement
  multiple interfaces.
*/
class ShapeImpl implements Shape {
  color: string;
  isVisible: boolean;

  constructor(color: string, isVisible: boolean) {
    this.color = color;
    this.isVisible = isVisible;
  }
}

const shapeImplObj1 = new ShapeImpl("Indigo", true);
console.log(shapeImplObj1);

printSectionEnd();

printSectionHeader("Composing Types using union and type aliases");

/*
  In Typescript, we can merge several built-in types to compose new types. We can
  do it by using either union or generics. In this section union is demonstrated.
  Unions are represented by the '|' symbol. We create a type alias using the
  "type" keyword while using uniion.
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

/*
  Litarals typing behaves different for objects. Since, the values of any property of
  an object can be chaged, Typescript cannot rely on thier values for literal type
  checking so, they use the type of the properties for type validatoin instead.
  However, we can use "as const" in object declation to let typescript know
  that the values of that object's properties won't change in future, which will enable
  literal type checking for that object using the values of its properties. This rule
  applies for arrays as well.
*/

// Typescript will only check for peoperty types
const temperature = {
  value: 29,
  unit: "Celsius",
};

// Note that we need to use "typeof" to use object literals
function printTemperature(temp: typeof temperature): void {
  console.log(`${temp.value} degree ${temp.unit}.`);
}

// We can use pass any object that matches the structure of "temperature"
printTemperature({ value: 42, unit: "Fahrenheit" });

/*
  We're telling typescript that values of this object's properties won't change.
  Here, the type of value will be 29 instead of number, and the type of unit will be
  "Celcius" intead of string.
*/
const immutableTemperature = {
  value: 29,
  unit: "Celsius",
} as const;

function printImmutableTemperature(temp: typeof immutableTemperature): void {
  console.log(`${temp.value} degree ${temp.unit}.`);
}

// These values must match the one defined in the literal
printImmutableTemperature({ value: 29, unit: "Celsius" });

printSectionEnd();

printSectionHeader("Type assertions");

/*
  Even through Typescript can infer types itself, sometimes we may want to specify
  which exact type to use in a certain situation. This can be particularly useful
  for using javascript libraries or object in typescript. We can assert types for
  them using the "as" keyword
*/
const pw1 = Math.pow(2, 2) as number;
console.log(pw1);

/*
  Apart from using the "at" keyword, we can also use angle brackets
  for type assertion
*/
const pw2 = <number>Math.pow(2, 3);
console.log(pw2);

/*
  This feature is useful when dealing with literal types as shown below.
*/

// Typescript will infer this variable's type as string
function setHttpMethod(method: "GET" | "POST"): void {
  console.log(`HTTP method of this request has been set to ${method}`);
}

// The type of "method" will be string
const request = {
  method: "GET",
};

/*
  Since the type of "method" is infered as string, we have to
  tell typescript that this method has indeed the value "GET"
*/
setHttpMethod(request.method as "GET");

printSectionEnd();

printSectionHeader("Optional properties and Non-null Assertion Operator");

/*
  When defining object types, we can specify certain properties of that
  object as optional
*/
interface Student {
  studentName: string;
  schoarship?: boolean; // The type of this will be inferred as boolean | undefined
  extraCurricular?: {
    title: string;
  }[];
}

function printStudent(student: Student): void {
  console.log(`Student Name: ${student.studentName}`);
  console.log(`Student's Scholarship Status: ${student.schoarship}`);
  /*
    Since extraCurricular is optional, it could be undefined and typescript
    won't allow us to access its property by default. However, we can use
    non-null assertion operator '!' to tell typescript that we're sure
    extraCurricular won't be null. Note that the non-null assertion operator
    works for both null and undefined.
  */
  console.log(
    `Student's First Extra-Curricular: ${student.extraCurricular![0].title}`
  );
}

const student1: Student = {
  studentName: "Student 1",
  schoarship: true,
  extraCurricular: [{ title: "Robotics" }],
};

printStudent(student1);

printSectionEnd();

printSectionHeader("Extending Interfaces");

/*
  One interface can extend from another.
*/

interface Fruit {
  fruitName: string;
}

interface Vegetable extends Fruit {
  color: string;
}

function printFruit(fruit: Fruit): void {
  console.log(fruit);
}

const vegatable1: Vegetable = {
  fruitName: "Tomato",
  color: "red",
};

/*
  Note that we can also pass Vegetable in printFruit as a subset
  of Vegetable's property satisfies the Fruit interface, since vegetable
  is indeed an extension of Fruit.
*/

printFruit(vegatable1);

/*
  Apart from extension, we can also add new property to an interface after
  its initial declaration which is one of the differences between interfaces
  and type aliases (the keyword "type"). Unlike interfaces, object types created
  using type aliases cannot be modified after declaration. It's a good practice to
  use interface by default unless we need to use "type" for some specific reason,
  since interfaces are easier to extend.
*/
interface Soldier {
  soldierName: string;
}

// We're adding another property to the Soldier interface
interface Soldier {
  soldierRank: string;
}

const soldier1: Soldier = {
  soldierName: "John Doe",
  soldierRank: "Major",
};

console.log(soldier1);

printSectionEnd();

printSectionHeader("Functions with Properties");

/*
  In Javascript, we can add properties to a function or callable object.
  To do this in Typescript, we first have to define the structure of that
  callable in a type.
*/
interface AddFunc {
  description: string;
  // Note that we're not using arrow notation if we want the object ITSELF to be callable
  (num1: number, num2: number): void;
}

const AddFuncImpl: AddFunc = (num1: number, num2: number) => {
  console.log(num1 + num2);
};

AddFuncImpl.description = "Adds two number";

AddFuncImpl(5, 7);

printSectionEnd();

printSectionHeader("Function Overloading");

/*
  To overload a function in Typescript, we have to write two type of function
  declaration:
  1. The overloaded declarations
  2. The implementation declaration
  So, a function can have one or more overloaded declaration and it MUST have
  only one implementation declaration. That implemenation declaration has to cover
  all cases of overloaded definitions. An example this is shown below:
*/
function printMultiply(op1: number, op2: number): void; // Overload definition 1
function printMultiply(op1: string, op2: number): void; // Overload definition 2
function printMultiply(op1: number | string, op2: number): void {
  // Implementation definition
  if (typeof op1 === "number") {
    // Because of "narrowing", Typescript knows that op1 is a number inside this block
    console.log(op1 * op2);
  } else {
    // Similarly, Typescript knows that op2 is a string inside this  block
    const multipliedString = new Array(op2).fill(op1).join("");
    console.log(multipliedString);
  }
}

printMultiply(5, 8);
printMultiply("Apple", 5);

printSectionEnd();

printSectionHeader("Readonly Properties");

/*
  Reaonly properties of an object cannot be changed after initial assignment. If
  a readonly property is an object, it cannot be re-assignmed but it's internal
  properties can be modified.
*/
interface Player {
  readonly playerName: string;
  age: number;
}

const player1: Player = {
  playerName: "Player One",
  age: 25,
};

// This will cause error since playerName is readonly
// player1.playerName = "Player One Modified"

// Non-readonly property age can be modified as usual
player1.age = 26;

printSectionEnd();

printSectionHeader("Index Signature");

/*
  Sometimes we want to access properties of an object in a key-value pair, which Javascr4ipt allows.
  However, when using this feature in Typescript, we may want to specify the valid types of keys
  and associated values. We can do so by using index signatures
*/

interface FruitBasket {
  /*
    Note that the name and type of the "key" goes inside square brackets. We can read this statement like:
    "If we use a key of type 'string', we expect a value of type 'number'"
  */
  [fruitName: string]: number;
}

const fruitBasket: FruitBasket = {
  Apple: 3,
  Orange: 5,
  Peach: 7,
};

function printFruitBasket(basket: FruitBasket) {
  for (let fruitName in basket) {
    // Note that typescript was able to infer that fruitQuantity should be a number because we used index signature.
    const fruitQuantity = basket[fruitName];
    console.log(fruitQuantity);
  }
}

printFruitBasket(fruitBasket);

printSectionEnd();

printSectionHeader("Destructuring Objects");

/*
  We can use object desctucturing feature of Javascript in TypeScript in the following way:
*/
const product1 = {
  title: "T-Shit",
  amount: 29.5,
  isAvailable: true,
};

// Note that the type association goes AFTER writing the usual destructurintg syntax
function printProductInfo({
  title,
  amount,
  isAvailable,
}: {
  title: string;
  amount: number;
  isAvailable: boolean;
}) {
  console.log(`Product Name: ${title}`);
  console.log(`Product Amount: ${amount}`);
  console.log(`Product Available: ${isAvailable}`);
}

printProductInfo(product1);

printSectionEnd();

printSectionHeader("Excess Property Checks");

/*
  In an earlier section, we saw that Typescript only requires a "subset"
  of an object's properties to satisfy a type. That is however, not the case
  for object "literals". When it comes to literals, typescript does excess
  property checking.
*/

/*
  This will thorw error even through it should've satisfy the Product Type.
  This is because, for object literals, Typescript require EXACT match of properties with
  the corresponding type.
*/
// printProductInfo({ title: "Hat", amount: 25.5, isAvailable: true, discountPercentage: 10 })

// This is valid since it follows the exact specification of the type
printProductInfo({ title: "Hat", amount: 25.5, isAvailable: true });

printSectionEnd();

printSectionHeader("Readonly Arrays");

/*
  We can specify an array to be readonly in Typescript using the typescript built-in type
  ReadOnlyArray<T> or the shorthand like "readonly string[]". We can use them for many cases like
  making sure an array cananot be changed inside a function.
*/
function iterateAndPringArray<T>(arr: ReadonlyArray<T>): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    // Note that we cannot accidentaly modify the array content
    // arr[i] = 6;
  }
}

iterateAndPringArray<number>([1, 2, 3, 7, 2, 3, 8]);

printSectionEnd();

printSectionHeader("Tuples");

/*
  Tuples are a type of array fixed lengh and fixed type for each position
*/
type Point = [number, number];

const point: Point = [2, 3];

console.log(point);

printSectionEnd();

printSectionHeader("Type Intersection");

/*
  In an earlier section, we saw how we can compose types by using union. We can
  also compose type using intersection where a child type can have all the properties
  of its parent types. This is similiar to extending an interface, however it differens
  in terms of handling overlapping properties of parents.
*/
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const colorfulCircle1: ColorfulCircle = {
  radius: 5,
  color: "blue",
};

console.log(colorfulCircle1);

printSectionEnd();

printSectionHeader("The keyof Operator");

/*
  We can use Typescript's keyof operator to extracting an union type from
  an existig type's property keys
*/

/*
  Objects of this type will store co-ordinate values against their specific dimension key.
*/
type Point3d = {
  x: number;
  y: number;
  z: number;
};

// This statement is actually says, type Point3dUnionType = "x" | "y" | "z";
type Point3dKeyType = keyof Point3d;

function printPoint3dCoCord(point: Point3d, dimensionIndex: Point3dKeyType) {
  console.log(point[dimensionIndex]);
}

const p3d1 = {
  x: 1,
  y: 2,
  z: 3,
};

printPoint3dCoCord(p3d1, "y");

printSectionEnd();

printSectionHeader("The typeOf Operator");

/*
  The typeOf operator allows us to get the type of "value" objects. It can be useful in
  many cases like using predefined type ReturnedType<T> that can get the type of return value
  of a function
*/

function generateNumber(): number {
  return 8;
}

/*
  Since generateNumber is a value object (functions are object in JS), we have to use typeof
  operator to get its type
*/
type generateNumberReturnType = ReturnType<typeof generateNumber>;

printSectionEnd();

printSectionHeader("Contitional Type and Type Indexing");

/*
  In Typescript, we can set types based on conditions which is particularly useful
  while using generics. We can also use indexing on object types to get the type
  of any of their property.
*/

/*
  Here, we're saying that if the generic type T has a message property, then type of
  MessageOf<T> will be whatever type the "message" property has. If there is no message
  property, the type of MessageOf<T> will be assigned as "never" which will make sure
  that nobody can assign an instance of this type to anything.
*/
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

const Email = {
  message: "Hello",
};

// EmailMessageType will be infered as string
type EmailMessageType = MessageOf<typeof Email>;

const CodedMessage = {
  message: 123,
};

// CodedMessageType will be infered as number
type CodedMessageType = MessageOf<typeof CodedMessage>;

printSectionEnd();

printSectionHeader("The 'infer' keyword");

/*
  Sometimes, we may want to extract the type of array elements.
*/

/*
  This type represents a Flatten state of an array. If the given type
  T is indeed an array, FlattenArray<T> will represent the type of
  whatever gets returned when we try to index "T" using a number. For intance
  it will be string for a string[]. If type T is not an array, FlattenArray<T>
  will represent the type of T instead.
*/
type FlattenArray<T> = T extends any[] ? T[number] : T;

// FlattenStringArray will be infered as "string"
type FlattenStringArray = FlattenArray<string[]>;

/*
  While the above approach gets the job done, it can be done in an easier way if we
  use the "infer" keyword. The infer keyword tells typescript to infer the type itself
  based on context. So if we use infer with Array<T>, Typescript will recognize that
  we are trying to infer the type of array elements
*/

// Note that we're using another generif type ItemType for holding the type of array elements
type FlattenArrayUpdated<T> = T extends Array<infer ItemType> ? ItemType : T;

// FlattenStringArrayUpdated will be infered as "string"
type FlattenStringArrayUpdated = FlattenArrayUpdated<string[]>;

printSectionEnd();

printSectionHeader("Distributed Conditional Type");

/*
  When using contiidion in generic types, If we pass a union type as the generic type,
  Typescript will make the generic type distributive
*/

// Before moving in to conditions, let's look at this simple scenario
type ToArray<T> = T[];

// StringOrNumberArray is of type (string | number)[] as expected
type StringOrNumberArray = ToArray<string | number>;

// Ok, now let's add a condition in the generic type. This condition doesn't make much sense,
// sense we're using it for demonstration.
type ToArrayDistributive<T> = T extends any ? T[] : never;

/*
  Note that StringOrNumberArrayDistributive is of type string[] | number[], since the
  generic has become distributive.
*/
type StringOrNumberArrayDistributive = ToArrayDistributive<string | number>;

/*
  If we don't typescript to make the generic distributive, we can wrap surround each side of
  "extends" with []
*/
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;

/*
  StringOrNumberArrayNonDistributive is of type (string | number)[] since the generic type
  is not distributive anymore.
*/
type StringOrNumberArrayNonDistributive = ToArrayNonDistributive<
  string | number
>;

printSectionEnd();

printSectionHeader("Mapped Types");

/*
  Mapped types allow us to create a new type by modifying the property typs of
  and existing object type.
*/

// We're converting all property type of Person to boolean
type BoolanPerson = {
  [Propperty in keyof Person]: boolean;
};

/*
  We can also add/remove property modifiers like "readonly" and "?" using mapped types.
  prefixing a modifer with "-" or will remove that modifier. Prefixing the modifer with
  "+" or just writing the modifer will add it.
*/
type ReadOnlyPerson = {
  readonly [Propperty in keyof Person]: boolean;
};

// Now, let's remove the readonly property
type NonReadOnlyPerson = {
  -readonly [Propperty in keyof Person]: boolean;
};

printSectionEnd();

printSectionHeader("Templace Literal Types");

/*
  Javascript supports template string literals, using
  `${}` syntax, and Typescript extends it further by allowing us
  to create template literal for types.
*/

type PageTitle = "Home" | "About" | "Contact";
type Language = "EN" | "DE" | "BN";

// Typescript will cross multiply the elements of the above unions for generating this type.
type LocalizedPageTitle = `${PageTitle}_${Language}`;

printSectionEnd();
