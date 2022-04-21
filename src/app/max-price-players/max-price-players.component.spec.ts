import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPricePlayersComponent } from './max-price-players.component';

describe('MaxPricePlayersComponent', () => {
  let component: MaxPricePlayersComponent;
  let fixture: ComponentFixture<MaxPricePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxPricePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPricePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
