import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoReelComponent } from './photo-reel.component';

describe('PhotoReelComponent', () => {
  let component: PhotoReelComponent;
  let fixture: ComponentFixture<PhotoReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoReelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
