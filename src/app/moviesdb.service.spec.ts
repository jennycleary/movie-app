import { TestBed, inject } from '@angular/core/testing';

import { MoviesdbService } from './moviesdb.service';

describe('MoviesdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesdbService]
    });
  });

  it('should be created', inject([MoviesdbService], (service: MoviesdbService) => {
    expect(service).toBeTruthy();
  }));
});
