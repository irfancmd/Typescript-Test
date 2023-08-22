"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
(0, utils_1.printSectionHeader)("Declaring Variables and Constants");
/*
  Specifying types like this is optional while declaring
  variables as Typescript can automatically infer them. One the
  type is assigned, it cannot be changed. It is however, recommended
  to just specify the type for clarity whenever possible.
*/
var userName = "Akkas Ali";
console.log(userName);
(0, utils_1.printSectionEnd)();
(0, utils_1.printSectionHeader)("Defining types using interfaes");
/*
  Here we're using the interface in an object that doesn't belong
  to any of our defined class
*/
var shape1 = {
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
var ShapeClass = /** @class */ (function () {
    function ShapeClass(color, isVisible) {
        this.color = color;
        this.isVisible = isVisible;
        console.log("Created an object of ShapeClass");
    }
    return ShapeClass;
}());
/*
  Here, we're using that schema while creating an object
*/
var shapeObj1 = new ShapeClass("Lime", true);
console.log(shapeObj1);
(0, utils_1.printSectionEnd)();
