import { Component, OnInit, Input } from '@angular/core';
import { recipeModel } from '../recipe.model';
import { ingredientModel } from 'src/app/ingredient.model';
import { recipeService } from '../recipe-service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 
  
  constructor(public recipeserv:recipeService,
    public route:ActivatedRoute) { }

    id:number;
  recipedetail:recipeModel;
  ngOnInit(): void {
    this.route.params.
    subscribe(
      (param:Params)=>{
        this.id=param['id'];
        this.recipedetail=this.recipeserv.getRecipeById(param['id']);
        console.log('inside the recipe detail '+param['id']);

      }
    );
  }
  addingshop(){
  this.recipeserv.addshopping(this.recipedetail.recipeingredient);
  }
  deleterecipe(){
    this.recipeserv.deleterecipe(this.id);
  
  }




}
