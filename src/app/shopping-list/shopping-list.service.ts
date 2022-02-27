import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potato', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      let isIngredientExist = false;

      this.ingredients.forEach((item) => {
        if (ingredient.name === item.name) {
          isIngredientExist = true;
          item.amount += ingredient.amount;
        }
      });

      if (!isIngredientExist) {
        this.ingredients.push(ingredient);
      }
    });

    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}