import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recipeService } from './recipes/recipe-service';
import { recipeModel } from './recipes/recipe.model';
import {tap} from 'rxjs/operators';

@Injectable()
export class dataStorageService{

    constructor(private http:HttpClient,private recipeservice:recipeService){

    }
onSave(){
    const recipe=this.recipeservice.getrecipe();
    this.http.post('http://localhost:8080/recipes',recipe).subscribe(response=>
    console.log(response));
}
onFetch(){

   return this.http.get<recipeModel[]>('http://localhost:8080/recipes').
    pipe(
        tap(recipes=>{
        this.recipeservice.updaterecipies(recipes)
        })) 
     }
}