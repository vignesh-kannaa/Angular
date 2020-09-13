import { ingredientModel } from '../ingredient.model';

export class recipeModel{
     public name:string;
     public description:string;
     public image:string;
     public recipeingredient:ingredientModel[];
constructor(name:string,desc:string,img:string,ing:ingredientModel[]){
    this.name=name;
    this.description=desc;
    this.image=img;
    this.recipeingredient=ing;
}
}