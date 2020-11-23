import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDivisionLeagueComponent } from './school-division-league.component';

describe('SchoolDivisionLeagueComponent', () => {
  let component: SchoolDivisionLeagueComponent;
  let fixture: ComponentFixture<SchoolDivisionLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDivisionLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDivisionLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
