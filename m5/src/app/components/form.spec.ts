import {ComponentFixture, TestBed} from '@angular/core/testing'

import {TaskFormComponent} from './form'

describe('taskFormComponent', () => {
  let component: TaskFormComponent
  let fixture: ComponentFixture<TaskFormComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TaskFormComponent] })
    fixture = TestBed.createComponent(TaskFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () =>  expect(component).toBeTruthy() )
})
