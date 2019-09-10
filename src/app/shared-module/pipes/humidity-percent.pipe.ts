import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humidityPercent'
})
export class HumidityPercentPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value / 100;
  }

}
