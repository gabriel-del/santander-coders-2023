import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TaskFiltroComponent } from './filtro'

describe('taskFiltroComponent', () => {
  let component: TaskFiltroComponent
  let fixture: ComponentFixture<TaskFiltroComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFiltroComponent],
    })
    fixture = TestBed.createComponent(TaskFiltroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
