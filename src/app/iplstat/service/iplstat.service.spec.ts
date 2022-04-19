import { TestBed } from '@angular/core/testing';

import { IplstatService } from './iplstat.service';

describe('IplstatService', () => {
  let service: IplstatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplstatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
