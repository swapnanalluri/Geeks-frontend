import { TestBed, async, inject } from '@angular/core/testing';

import { CustAuthGuard } from './cust-auth.guard';

describe('CustAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustAuthGuard]
    });
  });

  it('should ...', inject([CustAuthGuard], (guard: CustAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
