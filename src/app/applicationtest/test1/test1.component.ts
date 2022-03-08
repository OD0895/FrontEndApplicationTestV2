import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import * as moment from 'moment';
import { WeatherData } from 'src/app/interfaces/weatherData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  longText:string = "";

  constructor(private weatherDataService: WeatherDataService) { }

  public listWeatherData: WeatherData[] = new Array<WeatherData>();

  ngOnInit(): void {
    this.weatherDataService.getWeatherData('17.55490865839242', '-99.50857407782358').subscribe(data => {  
      console.log(data)
      let lugar = data['timezone'];
      let lon = data['lon'];
      let lat = data['lat'];
      
      data['hourly'].slice(0, 7).forEach(element => {
        this.listWeatherData.push({ hora: moment.unix(element.dt).format('HH:mm:ss'), temp : element.temp, lugar, humedad: element.humidity, lon, lat });
        //console.log( moment(element.dt).format('HH:mm:ss')  ) 
      });

    },(error: HttpErrorResponse) =>{
      this.longText = "Error al conectarse..."
    });

    console.log(this.listWeatherData)
  }

}
