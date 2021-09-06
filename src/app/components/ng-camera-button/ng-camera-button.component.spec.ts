import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCameraButtonComponent } from './ng-camera-button.component';

describe('NgCameraButtonComponent', () => {
  let component: NgCameraButtonComponent;
  let fixture: ComponentFixture<NgCameraButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCameraButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCameraButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
