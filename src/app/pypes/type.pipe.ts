import { Pipe, PipeTransform } from '@angular/core';
//import { type } from 'os';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: '草',
    Poison: '毒',
    Bug: '虫'
  }
  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }

}
