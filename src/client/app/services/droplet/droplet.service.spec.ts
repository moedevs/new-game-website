import { TestBed, inject } from '@angular/core/testing';

import { DropletService } from './droplet.service';

describe('DropletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropletService]
    });
  });

  it('should be created', inject([DropletService], (service: DropletService) => {
    expect(service).toBeTruthy();
  }));
});
