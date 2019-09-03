import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTasksComponent } from './pages/my-task/my-task.component';
import { WeatherCardComponent } from './shared-module/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyTasksComponent,
    WeatherCardComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
