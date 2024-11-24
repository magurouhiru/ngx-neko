import { TestBed } from '@angular/core/testing';

import { NgxNekoLibraryService } from './ngx-neko-library.service';

describe('NgxNekoLibraryService', () => {
  let service: NgxNekoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNekoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
