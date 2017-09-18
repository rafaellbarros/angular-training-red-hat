
import { PdfFileFilter } from "./PdfFileFilter";

let pdfFileFilter = new PdfFileFilter();

let theFileNames : string[] = ["alpha.doc", "beta.ppt", "charlie.pdf", "delta.exe", "echo.class"];

let i : number;

for (i=0; i < theFileNames.length; i++) {
    let  tempFileName = theFileNames[i];
    
      if (pdfFileFilter.accept(tempFileName)) {
        console.log(tempFileName);
      }
}