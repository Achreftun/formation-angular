import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getChar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const debut = args[0] ?? 0;
    const fin = args[1] ?? value.length;
    return value.substring(debut, fin);
  }

}
