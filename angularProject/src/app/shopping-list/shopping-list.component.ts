import { Component, OnInit } from '@angular/core';
import { ingredientModel } from '../ingredient.model';
import { shoppingService } from './shopping-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
ingredents:ingredientModel[]=[];

  constructor(public shopserv:shoppingService) { }

  ngOnInit(): void {
    this.ingredents=this.shopserv.getingredients ();
  }
  updateingredient(num:number){
    this.shopserv.updateingredient.emit(num);
  }

}
