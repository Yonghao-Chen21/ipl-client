import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplstatComponent } from './iplstat.component';

describe('IplstatComponent', () => {
  let component: IplstatComponent;
  let fixture: ComponentFixture<IplstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IplstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IplstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
