import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplStatTeamRoleComponent } from './ipl-stat-team-role.component';

describe('IplStatTeamRoleComponent', () => {
  let component: IplStatTeamRoleComponent;
  let fixture: ComponentFixture<IplStatTeamRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplStatTeamRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IplStatTeamRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
