import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { recipeModel } from './recipe.model';
import {dataStorageService} from '../data-storage-service';
import { recipeService } from './recipe-service';

@Injectable()
export class RecipeResolver implements Resolve<recipeModel[]>{

    constructor(private dataservice:dataStorageService,private recipe:recipeService){
    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const recipe=this.recipe.getrecipe();
        if(recipe.length===0){
            return  this.dataservice.onFetch();
        }else{
            return recipe;
        }
}
}