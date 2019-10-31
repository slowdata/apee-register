import { TestBed } from '@angular/core/testing';

import { RegistadorService } from './registador.service';

describe('RegistadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistadorService = TestBed.get(RegistadorService);
    expect(service).toBeTruthy();
  });
});
