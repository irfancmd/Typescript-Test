/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

function returnWhatIPassInExcept1(arg: 1): 2;
function returnWhatIPassInExcept1<T>(arg: T): T;
function returnWhatIPassInExcept1(arg: unknown): unknown {
  return arg;
}

const result1 = returnWhatIPassInExcept1(1);
const result2 = returnWhatIPassInExcept1(2);
const result3 = returnWhatIPassInExcept1(3);
const result4 = returnWhatIPassInExcept1("Hello");
