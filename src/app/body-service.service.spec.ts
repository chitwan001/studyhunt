import { TestBed } from '@angular/core/testing';

import { BodyServiceService } from './body-service.service';

describe('BodyServiceService', () => {
  let service: BodyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
