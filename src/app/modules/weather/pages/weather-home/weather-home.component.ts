import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { weatherDatas } from 'src/app/mdels/interface/weatherDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit,OnDestroy{

  private readonly destroy$:Subject<void> = new Subject();

  inicialCityName = 'São Paulo';
  weatherDatas!: weatherDatas;
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeatherDatas(this.inicialCityName)
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService
    .getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
       response && (this.weatherDatas = response);
       console.log(this.weatherDatas);


      },
      error: (error) =>console.log(error),

    });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.inicialCityName);
    this.inicialCityName  ='';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

}

