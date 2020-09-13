import {Component, Output,EventEmitter, OnInit} from '@angular/core';
import { dataStorageService } from '../data-storage-service';
import { Authservice } from '../auth/auth-service';
import { Router } from '@angular/router';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit{
    
    flag:boolean=false;
    constructor(private datastorage:dataStorageService,private auth:Authservice,private router:Router){}

    
    ngOnInit(){
        this.auth.authentication.subscribe(status=>{
        console.log("inside the header flag:" +status)
            this.flag=status});
    }
    
    savedata(){
        this.datastorage.onSave();
    }
    fetchdata(){
        this.datastorage.onFetch().subscribe();
    }
    logout(){
        console.log("inside the logout in header")
        this.flag=false;
        this.router.navigate(['/auth'])
    }

    ngOnDestroy() {
        if (this.auth.authentication) {
           this.auth.authentication.unsubscribe()
         }
        }
}