import {ComponentFixture, TestBed} from '@angular/core/testing'

import {Detail} from './detail'

describe('taskDetailComponent', () => {
  let component: Detail
  let fixture: ComponentFixture<Detail>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail],
    })
    fixture = TestBed.createComponent(Detail)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
