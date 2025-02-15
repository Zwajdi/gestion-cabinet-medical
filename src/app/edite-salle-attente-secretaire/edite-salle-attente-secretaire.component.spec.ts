import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeSalleAttenteSecretaireComponent } from './edite-salle-attente-secretaire.component';

describe('EditeSalleAttenteSecretaireComponent', () => {
  let component: EditeSalleAttenteSecretaireComponent;
  let fixture: ComponentFixture<EditeSalleAttenteSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeSalleAttenteSecretaireComponent]
    });
    fixture = TestBed.createComponent(EditeSalleAttenteSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
