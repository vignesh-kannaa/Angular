import { Component, OnInit} from '@angular/core';
import { shoppingService } from '../shopping-service';
import { ingredientModel } from 'src/app/ingredient.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
flag:boolean=true;
editMode:boolean=false;
ingredient:ingredientModel;
formshoppingedit:FormGroup;
indexnumber:number;
constructor(private sservice:shoppingService) { }

ngOnInit(): void {
  this.sservice.updateingredient.subscribe(
  (index:number)=>{
    this.editMode=true;
    this.indexnumber=index;
    this.ingredient=this.sservice.getingredient(index);
    this.formshoppingedit.patchValue({
      name: this.ingredient.name,
      amount:this.ingredient.amount
    })
  }

  );
this.formshoppingedit=new FormGroup({
  name: new FormControl(null,Validators.required),
  amount: new FormControl(null,Validators.required)
})
}


onsubmit(){
  console.log('inside the submit method');
  this.flag=this.formshoppingedit.get('amount').valid && this.formshoppingedit.get('name').valid;  
  if(this.flag){
    this.ingredient=new ingredientModel(this.formshoppingedit.value.name,this.formshoppingedit.value.amount);
    {
      if(this.editMode){
          this.sservice.updateingre(this.indexnumber,this.ingredient);
        }else{
          this.sservice.addingredient(this.ingredient);
       }
    }
    
  }
  this.formshoppingedit.reset();
  this.editMode=false;
}
deleteingredient(){
  console.log('inside the delete method')
  this.sservice.deleteingre(this.indexnumber);
  this.formshoppingedit.reset();
  this.editMode=false;
}
clearform(){
  console.log('inside the clear method')
  this.formshoppingedit.reset();
}
}
