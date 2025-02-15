import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationConsultsComponent } from './information-consults.component';

describe('InformationConsultsComponent', () => {
  let component: InformationConsultsComponent;
  let fixture: ComponentFixture<InformationConsultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationConsultsComponent]
    });
    fixture = TestBed.createComponent(InformationConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
