import { TestBed } from '@angular/core/testing';

import { NewsPageService } from './news-page.service';

describe('NewsPageService', () => {
  let service: NewsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
