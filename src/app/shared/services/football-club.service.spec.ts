import { TestBed } from '@angular/core/testing';

import { FootballClubService } from './football-club.service';

describe('FootballClubService', () => {
  let service: FootballClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
