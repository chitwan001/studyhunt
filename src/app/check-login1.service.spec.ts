import { TestBed } from '@angular/core/testing';

import { CheckLogin1Service } from './check-login1.service';

describe('CheckLogin1Service', () => {
  let service: CheckLogin1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLogin1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
