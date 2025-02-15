import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInDoctorComponent } from './log-in-doctor.component';

describe('LogInDoctorComponent', () => {
  let component: LogInDoctorComponent;
  let fixture: ComponentFixture<LogInDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInDoctorComponent]
    });
    fixture = TestBed.createComponent(LogInDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
