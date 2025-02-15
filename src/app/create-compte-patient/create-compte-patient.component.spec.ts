import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComptePatientComponent } from './create-compte-patient.component';

describe('CreateComptePatientComponent', () => {
  let component: CreateComptePatientComponent;
  let fixture: ComponentFixture<CreateComptePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComptePatientComponent]
    });
    fixture = TestBed.createComponent(CreateComptePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
