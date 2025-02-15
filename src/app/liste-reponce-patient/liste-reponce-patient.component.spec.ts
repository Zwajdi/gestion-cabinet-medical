import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReponcePatientComponent } from './liste-reponce-patient.component';

describe('ListeReponcePatientComponent', () => {
  let component: ListeReponcePatientComponent;
  let fixture: ComponentFixture<ListeReponcePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeReponcePatientComponent]
    });
    fixture = TestBed.createComponent(ListeReponcePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
