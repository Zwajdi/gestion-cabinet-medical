import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInSecretaireComponent } from './log-in-secretaire.component';

describe('LogInSecretaireComponent', () => {
  let component: LogInSecretaireComponent;
  let fixture: ComponentFixture<LogInSecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInSecretaireComponent]
    });
    fixture = TestBed.createComponent(LogInSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
