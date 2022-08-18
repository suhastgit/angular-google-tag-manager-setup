import { TestBed } from '@angular/core/testing';

import { WindowReferenceService } from './window-reference.service';

describe('WindowReferenceService', () => {
  let service: WindowReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
