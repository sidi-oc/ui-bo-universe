import { TestBed } from '@angular/core/testing';

import { OceansService } from './oceans.service';

describe('OceansService', () => {
  let service: OceansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OceansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
