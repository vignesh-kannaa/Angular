import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {recipeModel} from '../recipe.model';
import { recipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:recipeModel[]=[];
  constructor(public recipelist:recipeService) { 
}
  ngOnInit(): void {
    this.recipes=this.recipelist.getrecipe();
    this.recipelist.loadrecipes.subscribe(
      (recipelist:recipeModel[])=>{
        this.recipes=recipelist;
        console.log("inside the get method eventemitter"+this.recipes);
      }
    )
  }


}
