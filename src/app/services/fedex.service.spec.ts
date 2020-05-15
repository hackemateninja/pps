import { TestBed } from '@angular/core/testing';

import { FedexService } from './fedex.service';

describe('FedexService', () => {
  let service: FedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
