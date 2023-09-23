/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

interface RandomObj {
  a: string;
  b: {
    c: string;
    d: number;
    e: {
      f: string;
      g: boolean;
    };
  };
}

type DeepPartial<T> = {
  [K in keyof T]?: DeepPartial<T[K]>;
};

type RandomObjDeepPartial = DeepPartial<RandomObj>;

let ro1: RandomObjDeepPartial = {
  a: "abc",
  b: {
    e: {
      g: true,
    },
  },
};
