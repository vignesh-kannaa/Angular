import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {shoppingService} from './shopping-list/shopping-service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {recipeService} from './recipes/recipe-service';
import {RecipeResolver} from './recipes/recipe-resolver-service';
import {dataStorageService} from './data-storage-service';
import { AuthComponent } from './auth/auth.component';
import { Authservice } from './auth/auth-service';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from './auth/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoaderComponent
    
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

    
  ],
  providers: [shoppingService,recipeService,dataStorageService,RecipeResolver,Authservice,AuthGuard],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
