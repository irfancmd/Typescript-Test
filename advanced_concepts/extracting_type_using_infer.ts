/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

type Names = ["Bob Doe", "Akkas Ali", "Jane Doe"];

/* We're extracting the type of surname using infer. Here, rather than
   telling typescript the types directly, we're telling it to infer and
   extract them.
*/
type SurName<T> = T extends `${infer TFirstName} ${infer TSurName}`
  ? TSurName
  : never;

type SurName1 = SurName<Names[0]>;
type SurName2 = SurName<Names[1]>;
type SurName3 = SurName<Names[2]>;
