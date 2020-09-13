import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipeModel } from '../../recipe.model';
import { recipeService } from '../../recipe-service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeitem") recipe:recipeModel;
  @Input("ind") index:number;
  constructor(public serv:recipeService) { 
  }

  ngOnInit(): void {
  }


}
