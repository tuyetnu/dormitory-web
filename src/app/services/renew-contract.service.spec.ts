import { TestBed } from '@angular/core/testing';

import { RenewContractService } from './renew-contract.service';

describe('RenewContractService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenewContractService = TestBed.get(RenewContractService);
    expect(service).toBeTruthy();
  });
});
