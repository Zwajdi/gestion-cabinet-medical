import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeConsultationComponent } from './confirme-consultation.component';

describe('ConfirmeConsultationComponent', () => {
  let component: ConfirmeConsultationComponent;
  let fixture: ComponentFixture<ConfirmeConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmeConsultationComponent]
    });
    fixture = TestBed.createComponent(ConfirmeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
