import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInDirecteurComponent } from './log-in-directeur.component';

describe('LogInDirecteurComponent', () => {
  let component: LogInDirecteurComponent;
  let fixture: ComponentFixture<LogInDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInDirecteurComponent]
    });
    fixture = TestBed.createComponent(LogInDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
