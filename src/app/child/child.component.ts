import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  readonly RUT_FORMAT_REGX = `^\\d{1,2}\\.\\d{3}\\.\\d{3}[-][0-9kK]{1}$\$`;
  readonly rut = '';//new FormControl('', [Validators.required, Validators.pattern(this.RUT_FORMAT_REGX)]);

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  readonly foods = [
    {value: 1, viewValue: 'Pan con huevo'},
    {value: 2, viewValue: 'Pan con chancho'},
    {value: 3, viewValue: 'Pan con salame'},
    {value: 4, viewValue: 'Pan con wayu'},
  ];

  public selectedValue: string;
}
