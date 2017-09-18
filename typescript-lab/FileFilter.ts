export interface FileFilter {
    
      /*
       * Tests whether or not the specified filename should be included in a list.
       * Returns true if and only if the filename should be included
       */
      accept(fileName : string) : boolean;
    
    }