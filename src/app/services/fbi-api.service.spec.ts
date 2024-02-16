import { TestBed } from '@angular/core/testing';

import { FbiApiService } from './fbi-api.service';

describe('FbiApiService', () => {
  let service: FbiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
