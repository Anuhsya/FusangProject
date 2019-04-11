import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterlist'
})
export class FilterlistPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if(!args){
    //  return args;
    // }
    // if(!args){
    //   return args;
    // }
    if(args === '' || args === ' ') {
      return value;
    } else {
      return value.filter(
        function(item)
        {
          if(item.name.toLowerCase().indexOf(args.toLowerCase())> -1){
            return item.name;
          }
          // return item.name.toLowerCase().indexOf(args.toLowerCase()) > -1
        }
        // item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1
     );
    }
  }

}
