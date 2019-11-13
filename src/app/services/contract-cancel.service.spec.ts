import { TestBed } from '@angular/core/testing';

import { ContractCancelService } from './contract-cancel.service';

describe('ContractCancelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractCancelService = TestBed.get(ContractCancelService);
    expect(service).toBeTruthy();
  });
});
