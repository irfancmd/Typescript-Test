/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* If we had to return the type of a property of an object, we
   typically would do this. Here, never means that branch should
   never be the case in normal program flow.
*/
type DataType<T> = T extends { data: any } ? T["data"] : never;

type DT1 = DataType<{ data: string; id: number }>;

/*
  The above operation can also be done using the "infer keyword".
  Here, infer will figure the type ouf of "data" property.
*/
type DataTypeInfer<T> = T extends { data: infer TData } ? TData : never;

type DT2 = DataType<{ data: string; id: number }>;
type DT3 = DataType<{ data: "Hello"; id: "Random ID" }>;
