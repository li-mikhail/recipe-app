import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test name', 'Just a test decription', 'https://www.dianekochilas.com/wp-content/uploads/2022/10/Greek-recipe-kokoras-krasatos-coq-au-vin-rooster-cooked-in-wine.jpg'),
    new Recipe('Test name', 'Just a test decription', 'https://www.dianekochilas.com/wp-content/uploads/2022/10/Greek-recipe-kokoras-krasatos-coq-au-vin-rooster-cooked-in-wine.jpg'),
    new Recipe('Test name', 'Just a test decription', 'https://www.dianekochilas.com/wp-content/uploads/2022/10/Greek-recipe-kokoras-krasatos-coq-au-vin-rooster-cooked-in-wine.jpg'),
  ];
}
