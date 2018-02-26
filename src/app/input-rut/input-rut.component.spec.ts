import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRutComponent } from './input-rut.component';

describe('InputRutComponent', () => {
  let component: InputRutComponent;
  let fixture: ComponentFixture<InputRutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
