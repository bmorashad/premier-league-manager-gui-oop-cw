import { TestBed } from '@angular/core/testing';

import { MatchListModalService } from './match-list-modal.service';

describe('MatchListModalService', () => {
  let service: MatchListModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchListModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
