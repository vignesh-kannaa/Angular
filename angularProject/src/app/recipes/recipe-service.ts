import {recipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {ingredientModel} from '../ingredient.model';
import { shoppingService } from '../shopping-list/shopping-service';


@Injectable()
export class recipeService{

    loadrecipedetails=new EventEmitter<recipeModel>();
    loadrecipes=new EventEmitter<recipeModel[]>();
    constructor(public shopserv:shoppingService){}

    recipes:recipeModel[]=[
        new recipeModel('Keto-Chaffles',
        'wholesomeyum',
        'https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg',
         [new ingredientModel('cheese',10),new ingredientModel('waffles',3)]),

        new recipeModel('Chicken-Cacciatore',
        'Hunter',
        'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/12/chicken-cacciatore-one-pot-with-orzo.jpg',
        [new ingredientModel('chicken',2),new ingredientModel('tomato',3)])

      ];
    //recipes:recipeModel[]=[];
      getrecipe(){
          return this.recipes;

      }
      getRecipeById(index:number){
        console.log('inside the recipe service'+ index)
        return this.recipes[index];
      }
      addshopping(ingredient:ingredientModel[]){
        this.shopserv.addfromrecipe(ingredient);
      }
      saverecipe(recipe:recipeModel){
        this.recipes.push(recipe);
      }
      updaterecipe(index:number,recipe:recipeModel){
        this.recipes[index]=recipe;
      }
      deleterecipe(index:number){
        this.recipes.splice(index,1);
      }
      updaterecipies(recipe:recipeModel[]){
        this.recipes=recipe;
        this.loadrecipes.emit(this.recipes);
      }
}
