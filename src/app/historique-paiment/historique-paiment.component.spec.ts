import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePaimentComponent } from './historique-paiment.component';

describe('HistoriquePaimentComponent', () => {
  let component: HistoriquePaimentComponent;
  let fixture: ComponentFixture<HistoriquePaimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriquePaimentComponent]
    });
    fixture = TestBed.createComponent(HistoriquePaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
