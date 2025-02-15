import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleConsultationComponent } from './salle-consultation.component';

describe('SalleConsultationComponent', () => {
  let component: SalleConsultationComponent;
  let fixture: ComponentFixture<SalleConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalleConsultationComponent]
    });
    fixture = TestBed.createComponent(SalleConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
