import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiareInterfaceComponent } from './premiare-interface.component';

describe('PremiareInterfaceComponent', () => {
  let component: PremiareInterfaceComponent;
  let fixture: ComponentFixture<PremiareInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiareInterfaceComponent]
    });
    fixture = TestBed.createComponent(PremiareInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
