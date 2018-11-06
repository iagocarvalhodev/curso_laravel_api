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
    // this.tasks = this.taskService.tasks;

   }

   dell(id) {
      this.taskService.deleteTask(id).subscribe(data => {
        console.log('deletou');
      });
      this.taskService.getTasks()
          .subscribe( data => this.tasks = data);
   }

  ngOnInit() {

    this.taskService.getTasks()
    .subscribe( data => this.tasks = data);
  }


}
