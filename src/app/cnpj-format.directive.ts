import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCnpjFormat]'
})
export class CnpjFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    // Obtém o valor atual do campo de entrada
    let value = event.target.value;

    // Remove tudo exceto os dígitos
    value = value.replace(/\D/g, '');

    // Formata o CNPJ com pontos e barras
    if (value.length > 2) {
      value = value.substring(0, 2) + '.' + value.substring(2);
    }
    if (value.length > 6) {
      value = value.substring(0, 6) + '.' + value.substring(6);
    }
    if (value.length > 10) {
      value = value.substring(0, 10) + '/' + value.substring(10);
    }
    if (value.length > 15) {
      value = value.substring(0, 15) + '-' + value.substring(15);
    }

    // Atualiza o valor do campo de entrada com o CNPJ formatado
    event.target.value = value;
  }

}
