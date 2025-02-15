import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousDoctorComponent } from './rendez-vous-doctor.component';

describe('RendezVousDoctorComponent', () => {
  let component: RendezVousDoctorComponent;
  let fixture: ComponentFixture<RendezVousDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendezVousDoctorComponent]
    });
    fixture = TestBed.createComponent(RendezVousDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
