import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompteDirecteurComponent } from './create-compte-directeur.component';

describe('CreateCompteDirecteurComponent', () => {
  let component: CreateCompteDirecteurComponent;
  let fixture: ComponentFixture<CreateCompteDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCompteDirecteurComponent]
    });
    fixture = TestBed.createComponent(CreateCompteDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
