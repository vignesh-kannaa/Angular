import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {  FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { recipeService } from '../recipe-service';
import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeform:FormGroup;
  recipeMod:recipeModel;
  id:number;
  editMode=false;
  recipeName:string='';
  recipeImagepath:string='';
  recipeDescription:string='';
  recipeIngredients=new FormArray([]);
  
  

  constructor(public route:ActivatedRoute,private recipeservice:recipeService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(
    (param:Params)=>{
      this.id=param['id'];
      this.editMode=param['id']!=null;
    }
    )
      
     if(this.editMode){
     
      this.recipeMod=this.recipeservice.getRecipeById(this.id);
      this.recipeName=this.recipeMod.name;
      this.recipeImagepath=this.recipeMod.image;
      this.recipeDescription=this.recipeMod.description;
      if(this.recipeMod.recipeingredient){
        console.log('inside the edit with the ingredients');
       for(let ingre of this.recipeMod.recipeingredient){
         console.log(ingre.name +' '+ ingre.amount)
         this.recipeIngredients.push(
           new FormGroup({
             'name':new FormControl(ingre.name,Validators.required),
             'amount':new FormControl(ingre.amount,[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
           })
         )
       }

        }
     }

    this.recipeform=new FormGroup({
      'name': new FormControl(this.recipeName,Validators.required),
      'imagepath':new FormControl(this.recipeImagepath,Validators.required),
      'description':new FormControl(this.recipeDescription,Validators.required),
      'ingredient':this.recipeIngredients
    })
  }
  get ingredientarray(){
    
    return (<FormArray>this.recipeform.get('ingredient')).controls;
  }

  Addingredient(){
    (<FormArray>this.recipeform.get('ingredient')).push(
      new FormGroup({
        name:new FormControl('',Validators.required),
        amount:new FormControl('',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
      })
    )
  }
  saverecipe(){
    const updatedrecipe=new recipeModel(this.recipeform.get('name').value,
                                        this.recipeform.get('description').value,
                                        this.recipeform.get('imagepath').value,
                                        this.recipeform.get('ingredient').value)
    console.log('values in the recipe form'+this.recipeform.get('name').value,
                                        this.recipeform.get('imagepath').value,
                                        this.recipeform.get('description').value,
                                        this.recipeform.get('ingredient').value);  
    if(this.editMode){     
      this.recipeservice.updaterecipe(this.id,updatedrecipe);
    }else{
      this.recipeservice.saverecipe(updatedrecipe);
  }
  }
  deleteingredient(index:number){
    (<FormArray>this.recipeform.get('ingredient')).removeAt(index);
  }
  
  
}
