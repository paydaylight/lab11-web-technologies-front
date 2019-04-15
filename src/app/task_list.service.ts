import { Injectable } from '@angular/core';
// import { ITask } from './itask';
import {ITaskList} from './itask-list';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }
  taskListURL = 'http://127.0.0.1:8000/api/task_lists'

  getTaskLists(): Observable<ITaskList[]> {
    return this.http.get<ITaskList[]>(this.taskListURL);//[{id: 1, name: 'John'}];
  }
}
