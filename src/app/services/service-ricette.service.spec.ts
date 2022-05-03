import { TestBed } from '@angular/core/testing';

import { ServiceRicetteService } from './service-ricette.service';

describe('ServiceRicetteService', () => {
  let service: ServiceRicetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRicetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
