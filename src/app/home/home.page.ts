import { Component, OnInit } from '@angular/core';
import { ApiweatherService } from './../services/api/apiweather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title = 'Clima';

  constructor(
    private apiServ: ApiweatherService
  ){ 
    this.getWeather();   
  }

  ngOnInit() {
  }

  getWeather(){
    let city = 'Sao Paulo';
    let country = 'BR';
    this.apiServ.getWeather(city, country).subscribe((res)=>{
      console.log('Result: ', res);
    })
  }
}
