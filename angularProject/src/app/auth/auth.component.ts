import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import  {HttpClient } from '@angular/common/http';
import { Authmodel } from './auth-model';
import { Router } from '@angular/router';
import { Authservice } from './auth-service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  status:string;
  formauth:FormGroup;
  onLogin:boolean=true;
  isLoading=false;

  switchLogging(){
    this.onLogin=!this.onLogin;
  }
  constructor(private http:HttpClient,private router:Router,private authservice:Authservice) { }

  ngOnInit(): void {
    this.formauth=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(3)])
    })
  }
  onSubmit(){
    this.isLoading=true;
    if(this.onLogin){
    this.status='login';
    }
    else{
      this.status='signup';
    }
    const auth=new Authmodel(this.formauth.get('email').value,this.formauth.get('password').value);
    
    // this.http.post(
    //               'http://localhost:8080/authenticate?type='+this.status+'',
    //               auth, {responseType:'text'}
    //              ).subscribe(response=>
    //               { 
    //                 console.log(response); 
    //                 if(response=='success'){
    //                   this.authservice.login("success");
    //                   this.router.navigate(['/recipe']);
    //                   localStorage.setItem("uservalue","success")
                     
    //                 }
    //               })
    //         }
    this.authservice.login("success");
    this.router.navigate(['/recipe']);
   // localStorage.setItem("status","success")
     }

}
