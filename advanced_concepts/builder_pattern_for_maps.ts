/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

class BuilderMap<TMap extends Record<string, string> = {}> {
  private map: TMap;

  constructor() {
    this.map = {} as TMap;
  }

  // We have to use generic type for keys to make them literal type instead of using general type "string".
  set<K extends string>(
    key: K,
    value: string
  ): BuilderMap<TMap & Record<K, string>> {
    (this.map[key] as any) = value;

    return this;
  }

  // By using keyof TMap as type, we will be able to get autocomplete while using this function because of inference.
  get(key: keyof TMap): string {
    return this.map[key];
  }
}

const builderBeforeSet = new BuilderMap();
const builderAfterSet = builderBeforeSet
  .set("A", "Apple")
  .set("B", "Bean")
  .set("C", "Cat");

builderAfterSet.get("A");
