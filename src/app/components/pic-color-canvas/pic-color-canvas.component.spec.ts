import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicColorCanvasComponent } from './pic-color-canvas.component';

describe('PicColorCanvasComponent', () => {
  let component: PicColorCanvasComponent;
  let fixture: ComponentFixture<PicColorCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicColorCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicColorCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
