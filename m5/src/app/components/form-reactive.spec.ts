import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormReactive} from './form-reactive'

describe('formReactive', () => {
  let component: FormReactive
  let fixture: ComponentFixture<FormReactive>
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [FormReactive]})
    fixture = TestBed.createComponent(FormReactive)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => expect(component).toBeTruthy())
})
