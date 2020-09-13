import { Component, OnInit } from '@angular/core';
import { Authservice } from './auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'angularProject';
//   constructor(private authservice:Authservice){}
//   ngOnInit(){
//     console.log("inside the app component")
//    this.authservice.autologin();
//  }

}
