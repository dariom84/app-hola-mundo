import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(cityName: any): Observable<any> {
    let params: any = {};

    params.q = cityName;
    params.units = 'metric';
    params.type = "accurate";

    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "c1b49f6cefmsh69f054b0fcd306ep180061jsn99924e276e5b"
      }),
      params: new HttpParams({
        fromObject: params
      })
    }

    return this.http.get("https://community-open-weather-map.p.rapidapi.com/find", httpOptions);
  }
}
