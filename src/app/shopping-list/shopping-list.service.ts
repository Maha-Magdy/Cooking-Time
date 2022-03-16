import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potato', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void {
    this.handleAddingIngredient(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach((ingredient) => {
      this.handleAddingIngredient(ingredient);
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  handleAddingIngredient(ingredient: Ingredient): void {
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
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
