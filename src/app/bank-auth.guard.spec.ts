import { TestBed, async, inject } from '@angular/core/testing';

import { BankAuthGuard } from './bank-auth.guard';

describe('BankAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankAuthGuard]
    });
  });

  it('should ...', inject([BankAuthGuard], (guard: BankAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
