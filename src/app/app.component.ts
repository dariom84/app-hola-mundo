import { Component } from '@angular/core';
import { LocalStorageService } from './shared-module/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localStorageService: LocalStorageService){
      if(!this.localStorageService.retrieve('tasks')){
          this.localStorageService.create('tasks', []);
      }
  }
};

