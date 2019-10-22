import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewContractRequestComponent } from './renew-contract-request.component';

describe('RenewContractRequestComponent', () => {
  let component: RenewContractRequestComponent;
  let fixture: ComponentFixture<RenewContractRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewContractRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewContractRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
