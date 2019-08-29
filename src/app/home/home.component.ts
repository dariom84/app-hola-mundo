import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared-module/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weatherDescription: string = "";
  public weatherTemp: string = "";
  public weatherCity: string = "";
  public weatherIcon: string = "";

  constructor(private weatherService: WeatherService) {}

  searchWeather(cityName){
    this.weatherService.getWeather(cityName).subscribe(
      res => {
        console.log(res);
        this.weatherDescription = res.list[0].weather[0].description;
        this.weatherTemp = res.list[0].main.temp;
        this.weatherCity = res.list[0].name;
        this.weatherIcon = "http://openweathermap.org/img/wn/" + res.list[0].weather[0].icon + "@2x.png";
      },
      
      error => console.log(error)
    )
  }

  ngOnInit() { }
}
