import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleAttentDocteurComponent } from './salle-attent-docteur.component';

describe('SalleAttentDocteurComponent', () => {
  let component: SalleAttentDocteurComponent;
  let fixture: ComponentFixture<SalleAttentDocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalleAttentDocteurComponent]
    });
    fixture = TestBed.createComponent(SalleAttentDocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
