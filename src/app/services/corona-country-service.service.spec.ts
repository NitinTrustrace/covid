import { TestBed } from '@angular/core/testing';

import { CoronaCountryServiceService } from './corona-country-service.service';

describe('CoronaCountryServiceService', () => {
  let service: CoronaCountryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaCountryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
