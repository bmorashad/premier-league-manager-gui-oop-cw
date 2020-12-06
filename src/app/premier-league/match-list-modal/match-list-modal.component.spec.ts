import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListModalComponent } from './match-list-modal.component';

describe('MatchListModalComponent', () => {
  let component: MatchListModalComponent;
  let fixture: ComponentFixture<MatchListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
