import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSalleAttenteComponent } from './liste-salle-attente.component';

describe('ListeSalleAttenteComponent', () => {
  let component: ListeSalleAttenteComponent;
  let fixture: ComponentFixture<ListeSalleAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSalleAttenteComponent]
    });
    fixture = TestBed.createComponent(ListeSalleAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
