import {ComponentFixture, TestBed} from '@angular/core/testing'

import {Filtro} from './filtro'

describe('taskFiltroComponent', () => {
  let component: Filtro
  let fixture: ComponentFixture<Filtro>

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [Filtro]})
    fixture = TestBed.createComponent(Filtro)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => expect(component).toBeTruthy())
})
