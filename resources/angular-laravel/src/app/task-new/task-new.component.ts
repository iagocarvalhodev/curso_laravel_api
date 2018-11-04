import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.scss']
})
export class TaskNewComponent implements OnInit {

  task:Task = {
    name: '',
    value: 0,
    date_launch: '2017-10-01'
  };

  tasks:Array<Task>;

  constructor(private taskService:TaskService) {
    this.tasks = this.taskService.tasks;
   }

  add(){
    let task = Object.assign({},this.task);
    this.tasks.push(task);
  }

  ngOnInit() {
  }

}
