import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'electrovalvula'
})
export class ElectrovalvulaPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (value) return "abierta";
    return "cerrada";
  }

}
