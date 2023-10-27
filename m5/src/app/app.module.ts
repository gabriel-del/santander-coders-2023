import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Form } from './components/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { List } from './components/list';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { Detail } from './components/detail';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { Filtro } from './components/filtro';
import { FormReactive } from './components/form-reactive';
import { DateMaskDirective } from './directives/date-mask.directive';
@NgModule({
  declarations: [
    AppComponent,
    Form,
    List,
    CurrencyFormatPipe,
    Detail,
    DateGreaterThanTodayDirective,
    Filtro,
    FormReactive,
    DateMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
