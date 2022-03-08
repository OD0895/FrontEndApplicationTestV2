import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  readonly appIdWeather: string = `${environment.appIdWeather}`;

  constructor(private http: HttpClient) { }

  getWeatherData(lat, lon ) {
    let data = {lat, lon, appid: this.appIdWeather, units: 'metric' };
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall', {params: data} );
  }
}
