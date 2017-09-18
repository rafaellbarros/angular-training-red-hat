"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PdfFileFilter_1 = require("./PdfFileFilter");
var pdfFileFilter = new PdfFileFilter_1.PdfFileFilter();
var theFileNames = ["alpha.doc", "beta.ppt", "charlie.pdf", "delta.exe", "echo.class"];
var i;
for (i = 0; i < theFileNames.length; i++) {
    var tempFileName = theFileNames[i];
    if (pdfFileFilter.accept(tempFileName)) {
        console.log(tempFileName);
    }
}
