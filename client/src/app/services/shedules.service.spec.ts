import { TestBed } from '@angular/core/testing';

import { ShedulesService } from './shedules.service';

describe('ShedulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShedulesService = TestBed.get(ShedulesService);
    expect(service).toBeTruthy();
  });
});
