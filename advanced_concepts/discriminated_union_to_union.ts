/* This tells Typescript to treat this file as a module.
   Otherwise, it won't allow same names in differnet files.
*/
export {};

type MyEvent =
  | {
      category: "click";
      action: "clickAction";
    }
  | {
      category: "key_press";
      action: "keyPressAction";
    }
  | {
      category: "focus";
      action: "focusAction";
    };

type EventUnion = {
  [K in MyEvent as K["category"]]: `${K["category"]}:${K["action"]}`;
}[MyEvent["category"]];
