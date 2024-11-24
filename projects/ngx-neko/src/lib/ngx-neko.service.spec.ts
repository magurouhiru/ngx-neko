import { TestBed } from '@angular/core/testing';

import { NgxNekoService } from './ngx-neko.service';

describe('NgxNekoService', () => {
  let service: NgxNekoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNekoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
