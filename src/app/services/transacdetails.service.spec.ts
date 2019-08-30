import { TestBed } from '@angular/core/testing';

import { TransacdetailsService } from './transacdetails.service';

describe('TransacdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransacdetailsService = TestBed.get(TransacdetailsService);
    expect(service).toBeTruthy();
  });
});
