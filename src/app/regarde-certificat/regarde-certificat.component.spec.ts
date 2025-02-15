import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegardeCertificatComponent } from './regarde-certificat.component';

describe('RegardeCertificatComponent', () => {
  let component: RegardeCertificatComponent;
  let fixture: ComponentFixture<RegardeCertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegardeCertificatComponent]
    });
    fixture = TestBed.createComponent(RegardeCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
