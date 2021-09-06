import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCameraComponent } from './ng-camera.component';

describe('NgCameraComponent', () => {
  let component: NgCameraComponent;
  let fixture: ComponentFixture<NgCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
