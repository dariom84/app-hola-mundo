import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared-module/interfaces/task';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTasksComponent implements OnInit {

  public myTasks: Array<Task> = [];

  constructor() { }

  ngOnInit() {}

  onNewTask(task: Task): void {
    // console.log('From my-task page!', task);
    this.myTasks.push(task)
  }

}