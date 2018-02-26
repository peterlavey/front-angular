import {Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-input-rut',
  templateUrl: './input-rut.component.html',
  styleUrls: ['./input-rut.component.css']
})
export class InputRutComponent implements OnChanges {
  private _rut: string;

  @Input() set rut(rut: string) {
    this._rut = rut;
  }

  get rut(): string {
    return this._rut.toUpperCase();
  }

  ngOnChanges(changes: SimpleChanges) {
    const rut: SimpleChange = changes.rut;
    this._rut = rut.currentValue.toUpperCase();
  }

  constructor() {
  }

}
