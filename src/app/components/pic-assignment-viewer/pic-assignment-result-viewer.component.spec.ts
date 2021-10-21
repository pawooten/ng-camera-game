import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicAssignmentResultViewerComponent } from './pic-assignment-result-viewer.component';

describe('PicAssignmentViewerComponent', () => {
  let component: PicAssignmentResultViewerComponent;
  let fixture: ComponentFixture<PicAssignmentResultViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicAssignmentResultViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicAssignmentResultViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
