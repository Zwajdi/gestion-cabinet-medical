import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInPatientComponent } from './log-in-patient.component';

describe('LogInPatientComponent', () => {
  let component: LogInPatientComponent;
  let fixture: ComponentFixture<LogInPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInPatientComponent]
    });
    fixture = TestBed.createComponent(LogInPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
