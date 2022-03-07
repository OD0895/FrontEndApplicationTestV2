import { TestBed } from '@angular/core/testing';

import { ApplicationtestService } from './applicationtest.service';

describe('ApplicationtestService', () => {
  let service: ApplicationtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
