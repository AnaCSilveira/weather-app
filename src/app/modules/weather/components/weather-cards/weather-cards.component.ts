import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../mdels/interface/weatherDatas';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-cards',
  templateUrl: './weather-cards.component.html',
  styleUrls: []
})
export default class WeatherCardsComponent{

  @Input() weatherDatasInput!:weatherDatas;

  //Dados da previsão do tempo recebido pelo componente pai

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

}
