import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPatientsComponent } from './form-patients.component';

describe('FormPatientsComponent', () => {
  let component: FormPatientsComponent;
  let fixture: ComponentFixture<FormPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPatientsComponent]
    });
    fixture = TestBed.createComponent(FormPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
