import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component'
import {Form} from './components/form'
import {List} from './components/list'
import {Detail} from './components/detail'
import {Filtro} from './components/filtro'
import {FormReactive} from './components/form-reactive'

import {DateGreaterThanTodayDirective} from './directives/date-greater-than-today.directive'
import {CurrencyFormatPipe} from './pipes/currency-format.pipe'
import {DateMaskDirective} from './directives/date-mask.directive';
import { Log } from './components/log'

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
    DateMaskDirective,
    Log,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
