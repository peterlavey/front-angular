import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-rut',
  templateUrl: './input-rut.component.html',
  styleUrls: ['./input-rut.component.css']
})
export class InputRutComponent {
  private _rut: string;
  public isValid: boolean;

  @Output() state = new EventEmitter<boolean>();
  @Input() set rut(rut: string) {
    if (rut) {
      const lastCharacter = (event as any).data;
      if (typeof lastCharacter === 'string') {
        if (!!lastCharacter.match(/([0-9]|[kK])/)) {
          if (rut.length > 7) {
            this._rut = this.formateaRut(rut);
          } else {
            this.isValid = true;
            this.state.emit(false);
          }
        } else {
          (event as any).currentTarget.value = rut.substring(0, rut.length - 1);
        }
      }
    }
  }

  get rut(): string {
    return this._rut;
  }

  validaDV(T) {
    let M = 0;
    let S = 1;
    for (; T; T = Math.floor(T / 10)) {
      S = (S + T % 10 * (9 - M ++ % 6)) % 11;
    }
    return (S ? S - 1 : 'k').toString();
  }

  formateaRut(rut) {
    let rutPuntos = '';
    let dv = '';
    const actual = rut.replace(/^0+/, '');
    if (actual !== '' && actual.length > 1) {
      const sinPuntos = actual.replace(/\./g, '');
      const actualLimpio = sinPuntos.replace(/-/g, '');
      const inicio = actualLimpio.substring(0, actualLimpio.length - 1);
      let i = 0;
      let j = 1;
      for (i = inicio.length - 1; i >= 0; i--) {
        const letra = inicio.charAt(i);
        rutPuntos = letra + rutPuntos;
        if (j % 3 === 0 && j <= inicio.length - 1) {
          rutPuntos = '.' + rutPuntos;
        }
        j++;
      }
      dv = actualLimpio.substring(actualLimpio.length - 1);
    }
    if (dv === 'K') {
      dv = 'k' ;
    }
    this.isValid = this.validaDV(parseInt(rutPuntos.replace(/\./g, ''), 10)) === dv;
    this.state.emit(this.isValid);
    return `${rutPuntos}-${dv}`;
  }

  constructor() {
    this.isValid = true;
  }

}
