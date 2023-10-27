import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Log } from './log';

describe('Log', () => {
  let component: Log;
  let fixture: ComponentFixture<Log>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Log]
    });
    fixture = TestBed.createComponent(Log);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
