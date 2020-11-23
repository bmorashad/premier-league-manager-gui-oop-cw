import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniDivisionLeagueComponent } from './uni-division-league.component';

describe('UniDivisionLeagueComponent', () => {
  let component: UniDivisionLeagueComponent;
  let fixture: ComponentFixture<UniDivisionLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniDivisionLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniDivisionLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
