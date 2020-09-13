import { Component, OnInit } from '@angular/core';
import { recipeModel } from './recipe.model';
import { recipeService } from './recipe-service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  
})
export class RecipesComponent implements OnInit {
  recipe:recipeModel;
  constructor(public serv:recipeService) { }

  ngOnInit(): void {
    this.serv.loadrecipedetails.subscribe(
      (reci:recipeModel) => {
        this.recipe=reci});
      }
  

}
