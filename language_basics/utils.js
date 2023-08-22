"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSectionEnd = exports.printSectionHeader = void 0;
function printSectionHeader(sectionTitle) {
    console.log("********** ".concat(sectionTitle, " **********"));
}
exports.printSectionHeader = printSectionHeader;
function printSectionEnd() {
    console.log("*************************************");
    console.log();
}
exports.printSectionEnd = printSectionEnd;
