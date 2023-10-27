import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Form} from './form'

describe('taskFormComponent', () => {
  let component: Form
  let fixture: ComponentFixture<Form>
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [Form]})
    fixture = TestBed.createComponent(Form)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => expect(component).toBeTruthy())
})
