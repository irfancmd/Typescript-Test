/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/*
  Discriminated unions are useful when each member of the union are composite types with different
  proeprties. They utilize the power of conditional typing. An example is given below.
*/
type Event =
  | {
      category: "click";
      mouseX: number;
      mouseY: number;
    }
  | {
      category: "key_press";
      key: string;
    }
  | {
      category: "focus";
      target: HTMLElement;
    };

// Now, we can use conditional typing to dig into the properties of those composite types
function foo(event: Event): void {
  if (event.category === "focus") {
    // We can use event.target only becaue of conditional type inference
    event.target;
  } else if (event.category === "click") {
    // We can use event.mouseX and event.mouseY only becaue of conditional type inference
  } else {
    // We can use event.key only becaue of conditional type inference
  }
}

// Now, let's see how we can extract a particular type from a discriminated union

/*
  We can do so by using the "Extract" utility type. it will return any member of that
  unions that extends the type given in the second parameter.
*/
type ClickEvent = Extract<Event, { category: "click" }>;

/*
  We can also exlude certain members using the "Exclude" utility type. It's the reverse
  of extract.
*/
type NotClickEvent = Exclude<Event, { category: "click" }>;
