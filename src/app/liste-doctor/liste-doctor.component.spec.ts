import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDoctorComponent } from './liste-doctor.component';

describe('ListeDoctorComponent', () => {
  let component: ListeDoctorComponent;
  let fixture: ComponentFixture<ListeDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDoctorComponent]
    });
    fixture = TestBed.createComponent(ListeDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
