import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptationSalleConsultationComponent } from './acceptation-salle-consultation.component';

describe('AcceptationSalleConsultationComponent', () => {
  let component: AcceptationSalleConsultationComponent;
  let fixture: ComponentFixture<AcceptationSalleConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptationSalleConsultationComponent]
    });
    fixture = TestBed.createComponent(AcceptationSalleConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
