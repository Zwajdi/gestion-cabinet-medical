import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompteDoctorComponent } from './create-compte-doctor.component';

describe('CreateCompteDoctorComponent', () => {
  let component: CreateCompteDoctorComponent;
  let fixture: ComponentFixture<CreateCompteDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompteDoctorComponent]
    });
    fixture = TestBed.createComponent(CreateCompteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
