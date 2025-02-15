import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInformationComponent } from './image-information.component';

describe('ImageInformationComponent', () => {
  let component: ImageInformationComponent;
  let fixture: ComponentFixture<ImageInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageInformationComponent]
    });
    fixture = TestBed.createComponent(ImageInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
