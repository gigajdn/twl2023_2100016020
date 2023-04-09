import { TestBed } from '@angular/core/testing';

import { ApiFDataService } from './api.f-data.service';

describe('ApiFDataService', () => {
  let service: ApiFDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
