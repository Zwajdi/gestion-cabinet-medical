import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRendezVousComponent } from './edit-rendez-vous.component';

describe('EditRendezVousComponent', () => {
  let component: EditRendezVousComponent;
  let fixture: ComponentFixture<EditRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRendezVousComponent]
    });
    fixture = TestBed.createComponent(EditRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
