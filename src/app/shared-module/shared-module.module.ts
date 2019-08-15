import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { HeaderComponent } from './components/Header/header.component';

@NgModule({
  declarations: [TaskComponent, AddTaskComponent, TasksListComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TaskComponent, AddTaskComponent, TasksListComponent, HeaderComponent
  ]
})
export class SharedModule { }
