import { TestBed, inject } from '@angular/core/testing';

import { EncodeFileService } from './encode-file.service';

describe('EncodeFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncodeFileService]
    });
  });

  it('should be created', inject([EncodeFileService], (service: EncodeFileService) => {
    expect(service).toBeTruthy();
  }));
});
