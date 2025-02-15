import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegardeInformationConsultationComponent } from './regarde-information-consultation.component';

describe('RegardeInformationConsultationComponent', () => {
  let component: RegardeInformationConsultationComponent;
  let fixture: ComponentFixture<RegardeInformationConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegardeInformationConsultationComponent]
    });
    fixture = TestBed.createComponent(RegardeInformationConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
