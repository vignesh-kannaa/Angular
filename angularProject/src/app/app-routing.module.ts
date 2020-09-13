import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolver } from './recipes/recipe-resolver-service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const routes:Routes=[
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'recipe',
  canActivate:[AuthGuard],
  component:RecipesComponent,
  children:[
    {path:'',component:RecipeStartComponent},
    {path:'new-recipe',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResolver]},
    {path:':id/edit-recipe',component:RecipeEditComponent,resolve:[RecipeResolver]}
    ]},
  {path:'shoppinglist',component:ShoppingListComponent},
  {path:'auth',component:AuthComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
