import { TestBed } from '@angular/core/testing';

import { SearchCnpjService } from './search-cnpj.service';

describe('SearchCnpjService', () => {
  let service: SearchCnpjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCnpjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
