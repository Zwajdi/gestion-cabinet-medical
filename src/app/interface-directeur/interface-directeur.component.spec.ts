import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDirecteurComponent } from './interface-directeur.component';

describe('InterfaceDirecteurComponent', () => {
  let component: InterfaceDirecteurComponent;
  let fixture: ComponentFixture<InterfaceDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceDirecteurComponent]
    });
    fixture = TestBed.createComponent(InterfaceDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
