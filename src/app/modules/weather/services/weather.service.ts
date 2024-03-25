import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
private apiKey = '02b23eb0efb11ec21522db258becf920'

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string):Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appId=${this.apiKey}`,{})

  }

}
