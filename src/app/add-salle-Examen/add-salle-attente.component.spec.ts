import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalleAttenteComponent } from './add-salle-attente.component';

describe('AddSalleAttenteComponent', () => {
  let component: AddSalleAttenteComponent;
  let fixture: ComponentFixture<AddSalleAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalleAttenteComponent]
    });
    fixture = TestBed.createComponent(AddSalleAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
