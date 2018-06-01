import { Injectable } from '@angular/core';

@Injectable()
export class SortHelper {

  public By(objects: any, itemCallback: Function, event: any): Array<any>{
    return objects.sort((item1: any, item2: any) => {

      const value1 = itemCallback(item1);
      const value2 = itemCallback(item2);

      if( value1 === null){
        return 1;
      }

      if(value2 === null){
        return -1;
      }

      if (value1 > value2) {
        return 1 * event.order;
      }

      if (value1 < value2) {
        return -1 * event.order;
      }

      return 0;
    });
  }

  constructor() {}

}
