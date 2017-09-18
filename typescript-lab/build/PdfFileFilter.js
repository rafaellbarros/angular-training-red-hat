"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PdfFileFilter = /** @class */ (function () {
    function PdfFileFilter() {
    }
    /*
     * Tests whether or not the specified file name should be included in a list.
     * Returns true if and only if the file name should be included.
     */
    PdfFileFilter.prototype.accept = function (fileName) {
        var data = fileName.split(".");
        var result = (data.length == 2) && data[1] == "pdf";
        return result;
    };
    return PdfFileFilter;
}());
exports.PdfFileFilter = PdfFileFilter;
