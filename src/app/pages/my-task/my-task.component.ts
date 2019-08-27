import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared-module/interfaces/task';
import { LocalStorageService } from '../../shared-module/services/local-storage.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTasksComponent implements OnInit {

  public myTasks: Array<Task> = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.myTasks = this.localStorageService.retrieve('tasks');
  }

  onNewTask(task: Task): void {
    this.myTasks.push(task)
    this.localStorageService.update('tasks', this.myTasks);
    console.log('From my-tasks page',this.myTasks);
  }

}