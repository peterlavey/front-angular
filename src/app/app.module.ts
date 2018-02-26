import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ChildComponent } from './child/child.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatSelectModule, MatCardModule } from '@angular/material';
import { InputRutComponent } from './input-rut/input-rut.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ChildComponent,
    InputRutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
