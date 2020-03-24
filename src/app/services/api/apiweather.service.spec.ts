import { TestBed } from '@angular/core/testing';

import { ApiweatherService } from './apiweather.service';

describe('ApiweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiweatherService = TestBed.get(ApiweatherService);
    expect(service).toBeTruthy();
  });
});
