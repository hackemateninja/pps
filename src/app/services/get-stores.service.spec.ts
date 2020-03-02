import { TestBed } from '@angular/core/testing';

import { GetStoresService } from './get-stores.service';

describe('GetStoresService', () => {
  let service: GetStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
