import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any[], ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(restuarent: any[], filterString:string,propName:string) {
    const result:any=[];
    if(!restuarent||filterString==''||propName=='')
    {
      return restuarent
    }
    restuarent.forEach((restuarent:any)=>{
     if(restuarent[propName].trim().toLowerCase().includes(filterString)){
      result.push(restuarent)
     }
    })
    return result;
  }
 
  }
