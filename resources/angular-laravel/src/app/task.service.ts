import { Task } from './task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // tasks:Array<Task> = [];

  constructor(private http:HttpClient) {
  }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8000/tasks');
 }

  createTask(task:Task): Observable<Task[]> {
    return this.http.post<Task[]>('http://localhost:8000/tasks', task);
  }

}
