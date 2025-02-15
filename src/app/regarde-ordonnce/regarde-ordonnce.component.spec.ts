import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegardeOrdonnceComponent } from './regarde-ordonnce.component';

describe('RegardeOrdonnceComponent', () => {
  let component: RegardeOrdonnceComponent;
  let fixture: ComponentFixture<RegardeOrdonnceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegardeOrdonnceComponent]
    });
    fixture = TestBed.createComponent(RegardeOrdonnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
