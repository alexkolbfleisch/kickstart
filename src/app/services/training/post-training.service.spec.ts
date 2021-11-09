import { TestBed } from '@angular/core/testing';

import { PostTrainingService } from './post-training.service';

describe('PostService', () => {
  let service: PostTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
