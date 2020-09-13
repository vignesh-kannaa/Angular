import {ingredientModel} from '../ingredient.model';
import { EventEmitter } from '@angular/core';
export class shoppingService{
    
  updateingredient=new EventEmitter<number>();

    ingredents:ingredientModel[]=[
        new ingredientModel('Apple',5),
        new ingredientModel('Tomato',10),
        new ingredientModel('carrot',4)
      ];
      

      getingredients () {
        return this.ingredents;
      }
      
      getingredient(num:number) {
        return this.ingredents[num];
      }

      addingredient(ingre:ingredientModel){
        this.ingredents.push(ingre);
      }
      addfromrecipe(ing:ingredientModel[]){
        this.ingredents.push(...ing);
      }
      updateingre(index:number,ingredient:ingredientModel){
        this.ingredents[index]=ingredient;
      }
      deleteingre(index:number){
        this.ingredents.splice(index,1);
      }
}