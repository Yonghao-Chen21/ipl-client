import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatComponent } from './team-stat.component';

describe('TeamStatComponent', () => {
  let component: TeamStatComponent;
  let fixture: ComponentFixture<TeamStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
