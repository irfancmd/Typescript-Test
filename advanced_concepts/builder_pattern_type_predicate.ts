/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

/* We can implement builder pattern in our codebase by utilizing type predicates.
 */

class BuilderTuple<TArray extends number[] = []> {
  array: TArray;

  constructor() {
    this.array = [] as any;
  }

  push<TNum extends number>(num: TNum) {
    this.array.push(num);

    /* This is what implements the builder pattern for the class. We're returning the updated
       state of the class while maintaining type safety.
    */
    return this as any as BuilderTuple<[...TArray, TNum]>;
  }

  // Pushes at the beginning
  unshift<TNum extends number>(num: TNum) {
    this.array.unshift(num);

    return this as any as BuilderTuple<[TNum, ...TArray]>;
  }
}

const builderBeforePush = new BuilderTuple();
/* Note how "builderAfterPush" is of type BuilderTuple<[1, 2, 3]>.
   Also, note how each push function returns a builder object of different type
*/
const builderAfterPush = builderBeforePush.push(1).push(2).push(3);

const builderBeforeUnshift = new BuilderTuple();
const builderAfterUnshift = builderBeforeUnshift
  .unshift(1)
  .unshift(2)
  .unshift(3);
