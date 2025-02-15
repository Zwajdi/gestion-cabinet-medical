import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePatientOnligneComponent } from './liste-patient-onligne.component';

describe('ListePatientOnligneComponent', () => {
  let component: ListePatientOnligneComponent;
  let fixture: ComponentFixture<ListePatientOnligneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePatientOnligneComponent]
    });
    fixture = TestBed.createComponent(ListePatientOnligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
