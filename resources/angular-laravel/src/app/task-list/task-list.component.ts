import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  
  tasks:Array<Task>;

  constructor(private taskService:TaskService) {

    // this.taskService.tasks.push(
    //   {name: 'teste', value: 50, date_launch: '2017-07-07'}
    // );
    this.tasks = this.taskService.tasks;

   }

  ngOnInit() {
  }


}
