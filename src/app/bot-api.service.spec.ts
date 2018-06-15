import { TestBed, inject } from '@angular/core/testing';

import { BotApiService } from './bot-api.service';

describe('BotApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotApiService]
    });
  });

  it('should be created', inject([BotApiService], (service: BotApiService) => {
    expect(service).toBeTruthy();
  }));
});
