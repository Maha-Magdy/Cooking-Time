import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Kohlrabi Fries',
      'Baked Fries',
      'https://cleanfoodcrush.com/wp-content/uploads/2020/06/CleanFoodCrush-Printable-Recipe-Kohlrabi-Fries.jpg',
      [new Ingredient('Potato', 4), new Ingredient('Large Bulb', 2)]
    ),
    new Recipe(
      'Sunshine Burger',
      'Beef Burger',
      'https://www.pcrm.org/sites/default/files/sunshine-burger-1.jpg',
      [
        new Ingredient('ground chuck beef', 1),
        new Ingredient('Burger Bun', 4),
        new Ingredient('Slices medium cheddar cheese', 4),
        new Ingredient('Tomato', 1),
        new Ingredient('Green leaf lettuce', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
