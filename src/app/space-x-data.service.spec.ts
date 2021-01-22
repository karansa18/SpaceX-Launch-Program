import { TestBed } from '@angular/core/testing';

import { SpaceXDataService } from './space-x-data.service';

describe('SpaceXDataService', () => {
  let service: SpaceXDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceXDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
