import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCameraComponentComponent } from './html-camera-component.component';

describe('HtmlCameraComponentComponent', () => {
  let component: HtmlCameraComponentComponent;
  let fixture: ComponentFixture<HtmlCameraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCameraComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCameraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
