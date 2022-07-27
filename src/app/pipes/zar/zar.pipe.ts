import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zar'
})
export class ZarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return "R" + parseFloat(value.toString()).toFixed(2);
  }

}
