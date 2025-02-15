import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListeConsultationComponent } from './add-liste-consultation.component';

describe('AddListeConsultationComponent', () => {
  let component: AddListeConsultationComponent;
  let fixture: ComponentFixture<AddListeConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListeConsultationComponent]
    });
    fixture = TestBed.createComponent(AddListeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
