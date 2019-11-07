import { TestBed } from '@angular/core/testing';

import { RoomTransferService } from './room-transfer.service';

describe('RoomTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomTransferService = TestBed.get(RoomTransferService);
    expect(service).toBeTruthy();
  });
});
