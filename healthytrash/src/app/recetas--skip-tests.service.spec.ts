import { TestBed } from '@angular/core/testing';

import { RecetasSkipTestsService } from './recetas--skip-tests.service';

describe('RecetasSkipTestsService', () => {
  let service: RecetasSkipTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasSkipTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
