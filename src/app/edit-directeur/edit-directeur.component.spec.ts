import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirecteurComponent } from './edit-directeur.component';

describe('EditDirecteurComponent', () => {
  let component: EditDirecteurComponent;
  let fixture: ComponentFixture<EditDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDirecteurComponent]
    });
    fixture = TestBed.createComponent(EditDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
