import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLeagueComponent } from './professional-league.component';

describe('ProfessionalLeagueComponent', () => {
  let component: ProfessionalLeagueComponent;
  let fixture: ComponentFixture<ProfessionalLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
