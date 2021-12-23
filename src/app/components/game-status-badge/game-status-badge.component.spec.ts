import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatusBadgeComponent } from './game-status-badge.component';

describe('GameStatusBadgeComponent', () => {
  let component: GameStatusBadgeComponent;
  let fixture: ComponentFixture<GameStatusBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStatusBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
