import { Component, OnInit } from '@angular/core';
import {IonRouterOutlet} from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  location = {
    city: '', 
    country: 'BR'
  }

  canGoBack: boolean = false;

  constructor(
    private routerOutlet: IonRouterOutlet,
    private storage: Storage,
    private router: Router
  ){
  }

  ngOnInit() {
    this.canGoBack = this.routerOutlet && this.routerOutlet.canGoBack();
  }

  saveConfig(formData){
    console.log('Form data is ', formData);
    this.location.city = formData.city,
    this.location.country = formData.country,
    this.storage.set('location', JSON.stringify(this.location));
    this.router.navigateByUrl('/home');
  }


  gotToPage(){
    // this.router.navigate(['/home']);
    this.router.navigateByUrl('/home');
  }
}
