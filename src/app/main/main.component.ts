import { Component, OnInit } from '@angular/core';
import { ITask } from '../itask';
import { TaskListService } from '../task_list.service';
import { HttpClient } from '@angular/common/http';
import { ITaskList } from '../itask-list';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Django';
  task_list: Observable<ITaskList[]>;
  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
    this.getTaskLists();
  }

  getTaskLists(): void{
    // this.task_list = this.taskListService.getTaskLists();
    this.taskListService.getTaskLists()
      .subscribe(taskList => this.task_list);
  }

}
