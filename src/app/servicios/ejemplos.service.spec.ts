import { TestBed } from '@angular/core/testing';

import { EjemplosService } from './ejemplos.service';

describe('EjemplosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjemplosService = TestBed.get(EjemplosService);
    expect(service).toBeTruthy();
  });
});
