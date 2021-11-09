import { TestBed } from '@angular/core/testing';

import { PostTrainerService } from './post-trainer.service';

describe('PostTrainerService', () => {
  let service: PostTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
