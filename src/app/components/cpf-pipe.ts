import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return 'O CPF não foi informado.'
    if (value.length !== 11) return 'o CPF não é valido.'
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
