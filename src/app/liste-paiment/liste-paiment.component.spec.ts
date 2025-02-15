import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaimentComponent } from './liste-paiment.component';

describe('ListePaimentComponent', () => {
  let component: ListePaimentComponent;
  let fixture: ComponentFixture<ListePaimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePaimentComponent]
    });
    fixture = TestBed.createComponent(ListePaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
