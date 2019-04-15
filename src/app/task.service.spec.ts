import { TestBed } from '@angular/core/testing';

import { TaskListService } from './task_list.service';

describe('TaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskListService = TestBed.get(TaskListService);
    expect(service).toBeTruthy();
  });
});
