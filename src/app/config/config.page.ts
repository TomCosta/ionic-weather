import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  local = {
    city: '', 
    country: ''
  }

  constructor(
    private storage: Storage
  ){    
  }

  ngOnInit() {
  }

  getLocation(){
    // Or to get a key/value pair
    this.storage.get('local').then((val) => {
      if(val != null || val != undefined){
        
      }
      console.log('Your age is', val);
    });
  }

  setLocation(location){
    // set a key/value
    this.storage.set('local', location);
  }

}
