import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttenteSecretaireComponent } from './salle-attente-secretaire.component';

describe('SalleAttenteSecretaireComponent', () => {
  let component: SalleAttenteSecretaireComponent;
  let fixture: ComponentFixture<SalleAttenteSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalleAttenteSecretaireComponent]
    });
    fixture = TestBed.createComponent(SalleAttenteSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
