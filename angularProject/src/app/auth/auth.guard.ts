import {Injectable, OnInit} from '@angular/core'
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Authservice } from './auth-service';



@Injectable()
export class AuthGuard implements CanActivate{
    flag:boolean=false;
    constructor(private auth:Authservice,private router:Router){
        
        console.log("inside the constrcutor authguard");
        this.auth.authguard.subscribe(status=>{
            this.flag=status;
            console.log("the guard flag:"+this.flag);
             })
    }
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("inside the canactivate method:"+this.flag);
        if(!this.flag){
            this.router.navigate(['/auth'])
        }
         return this.flag;
   
    }
    
}
