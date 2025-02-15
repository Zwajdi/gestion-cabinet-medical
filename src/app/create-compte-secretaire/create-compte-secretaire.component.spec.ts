import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompteSecretaireComponent } from './create-compte-secretaire.component';

describe('CreateCompteSecretaireComponent', () => {
  let component: CreateCompteSecretaireComponent;
  let fixture: ComponentFixture<CreateCompteSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompteSecretaireComponent]
    });
    fixture = TestBed.createComponent(CreateCompteSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
