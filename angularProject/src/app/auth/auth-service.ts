import {Injectable,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Authservice{
    autostatus:string;
    authguard=new EventEmitter<boolean>();
    authentication=new EventEmitter<boolean>();
    constructor(private router:Router){}
login(status:string){
    
    if(status=='success'){
    
        this.authguard.emit(true);
        this.authentication.emit(true);
        console.log("in the emitter for the authguard")
       
    }
}
// autologin(){
//     this.autostatus=localStorage.getItem("status");
//     console.log("the local storage value:"+this.autostatus)
//     if(this.autostatus=="success"){
//         console.log("inside the succes autologin")
//       this.login(status);
//     }
// }
}