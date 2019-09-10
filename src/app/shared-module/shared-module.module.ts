import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { CentigradePipe } from './pipes/centigrade.pipe';
import { HumidityPercentPipe } from './pipes/humidity-percent.pipe';
import { WindSpeedPipe } from './pipes/wind-speed.pipe';

@NgModule({
 declarations: [
    TaskComponent, 
    AddTaskComponent, 
    TasksListComponent, 
    HeaderComponent, 
    CentigradePipe, 
    HumidityPercentPipe, 
    WindSpeedPipe
  ],
 imports: [
   CommonModule,
   ReactiveFormsModule,
   AlertModule.forRoot(),
   ModalModule.forRoot(),
   BsDatepickerModule.forRoot(),
   HttpClientModule
 ],
  providers: [
    LocalStorageService,
    WeatherService
  ],
 exports:[
   TaskComponent, 
   AddTaskComponent, 
   TasksListComponent, 
   HeaderComponent,
   CentigradePipe,
   HumidityPercentPipe,
   WindSpeedPipe
 ]
})

export class SharedModule { }