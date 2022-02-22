import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Kohlrabi Fries',
      'Baked Fries - 1',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg'
    ),
    new Recipe(
      'Kohlrabi Fries',
      'Baked Fries - 2',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
