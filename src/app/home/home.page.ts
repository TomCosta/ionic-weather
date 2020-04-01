import { ApiweatherService } from './../services/api/apiweather.service';
import { LoaderService } from '../services/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  mySeg;
  title = 'Clima';  
  dataWeather;
  weatherIcon;
  location = {
    city: '', 
    country: ''
  }

  constructor(    
    private apiServ: ApiweatherService,
    private loadServ:LoaderService,
    private storage: Storage,
    private router: Router
  ){            
  }

  ionViewWillEnter(){
    this.getLocation();
    this.getFlow();
  }

  ngOnInit() {       
  }

  segmentChanged(mySeg) {  
    this.storage.set('mySegment', mySeg);
  }

  async getFlow(){
    await this.storage.get('tabFlow').then((seg)=>{
      if(seg){
        this.mySeg = seg;
      }else{
        this.mySeg = 'hum';
      }
    })
  }

  async getLocation(){
    this.loadServ.presentLoading();
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
      if(res != undefined || res != null){
        this.weatherIcon = 'http://openweathermap.org/img/w/' + res['weather'][0].icon + '.png';
        this.dataWeather = res;
        this.loadServ.dismissLoader();
        }else{
          this.dataWeather = 'false';
          this.loadServ.dismissLoader();
        }
    })
  }
}
