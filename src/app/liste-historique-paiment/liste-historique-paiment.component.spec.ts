import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHistoriquePaimentComponent } from './liste-historique-paiment.component';

describe('ListeHistoriquePaimentComponent', () => {
  let component: ListeHistoriquePaimentComponent;
  let fixture: ComponentFixture<ListeHistoriquePaimentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeHistoriquePaimentComponent]
    });
    fixture = TestBed.createComponent(ListeHistoriquePaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
