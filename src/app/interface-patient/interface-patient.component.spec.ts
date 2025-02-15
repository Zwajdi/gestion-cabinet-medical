import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePatientComponent } from './interface-patient.component';

describe('InterfacePatientComponent', () => {
  let component: InterfacePatientComponent;
  let fixture: ComponentFixture<InterfacePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfacePatientComponent]
    });
    fixture = TestBed.createComponent(InterfacePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
