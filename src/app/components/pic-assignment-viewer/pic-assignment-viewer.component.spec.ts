import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicAssignmentViewerComponent } from './pic-assignment-viewer.component';

describe('PicAssignmentViewerComponent', () => {
  let component: PicAssignmentViewerComponent;
  let fixture: ComponentFixture<PicAssignmentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicAssignmentViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicAssignmentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
