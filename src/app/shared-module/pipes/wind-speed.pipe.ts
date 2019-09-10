import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
export class WindSpeedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + ' Km/h';
  }

}
