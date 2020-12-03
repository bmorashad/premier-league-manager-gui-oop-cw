import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailCardComponent } from './match-detail-card.component';

describe('MatchDetailCardComponent', () => {
  let component: MatchDetailCardComponent;
  let fixture: ComponentFixture<MatchDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchDetailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
