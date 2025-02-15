import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponceDemendeComponent } from './reponce-demende.component';

describe('ReponceDemendeComponent', () => {
  let component: ReponceDemendeComponent;
  let fixture: ComponentFixture<ReponceDemendeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReponceDemendeComponent]
    });
    fixture = TestBed.createComponent(ReponceDemendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
