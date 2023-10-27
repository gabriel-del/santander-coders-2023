import {ComponentFixture, TestBed} from '@angular/core/testing'

import {TaskFormReactiveComponent} from './form-reactive'

describe('taskFormReactiveComponent', () => {
  let component: TaskFormReactiveComponent
  let fixture: ComponentFixture<TaskFormReactiveComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormReactiveComponent],
    })
    fixture = TestBed.createComponent(TaskFormReactiveComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
