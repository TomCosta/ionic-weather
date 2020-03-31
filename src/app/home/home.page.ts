import { Component, OnInit } from '@angular/core';
import { ApiweatherService } from './../services/api/apiweather.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  title = 'Clima';
  dataWeather;
  location = {
    city: '', 
    country: ''
  }

  constructor(
    private apiServ: ApiweatherService,
    private storage: Storage,
    private router: Router
  ){            
  }

  ionViewWillEnter(){
    this.getLocation();
  }

  ngOnInit() {       
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  async getLocation(){
    this.storage.get('location').then((val) => {
      if(val != null || val != undefined){
        let location = JSON.parse(val);
        this.location.city = location.city;
        this.location.country = location.country;
        this.getWeather(location.city, location.country);
      } else {
        this.getWeather('Brasilia', 'BR');
      }
    });
  }

  async getWeather(city, country){
    this.apiServ.getWeather(city, country).subscribe((res)=>{
      console.log('Result: ', res);
      this.dataWeather = res;
    })
  }
}
