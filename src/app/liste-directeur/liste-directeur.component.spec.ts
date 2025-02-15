import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDirecteurComponent } from './liste-directeur.component';

describe('ListeDirecteurComponent', () => {
  let component: ListeDirecteurComponent;
  let fixture: ComponentFixture<ListeDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDirecteurComponent]
    });
    fixture = TestBed.createComponent(ListeDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
