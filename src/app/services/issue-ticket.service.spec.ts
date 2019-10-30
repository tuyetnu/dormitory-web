import { TestBed } from '@angular/core/testing';

import { IssueTicketService } from './issue-ticket.service';

describe('IssueTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueTicketService = TestBed.get(IssueTicketService);
    expect(service).toBeTruthy();
  });
});
