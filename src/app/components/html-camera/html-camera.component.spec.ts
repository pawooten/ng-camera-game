import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCameraComponent } from './html-camera.component';

describe('HtmlCameraComponent', () => {
  let component: HtmlCameraComponent;
  let fixture: ComponentFixture<HtmlCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
