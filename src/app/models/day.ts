import { Meal } from './meal';
import { Snack } from './snack';

export class Day {
  meals: Meal[];
  snacks: Snack[];
  calCounter: number;
  totalMealCal: number;
  totalSnackCal: number;
  totalDayCal: number;

  addMeal(currentMeal: Meal) {
    this.meals.push(currentMeal);
  }
  addSnack(currentSnack: Snack) {
    this.snacks.push(currentSnack);
  }
  totalMealCalDay() {
    let counter: number;
    counter = 0;
    // counter = this.meals.reduce((total, current)=> total + current)
    this.meals.forEach(meal => {
      counter += meal.returnCalCount();
    });
    return counter;
  }
  totalSnackCalDay() {
    let counter: number;
    counter = 0;
    this.snacks.forEach(snack => {
      counter += snack.returnCals();
    });
    return counter;
  }
  totalCalDay() {
    return this.totalMealCalDay() + this.totalSnackCalDay();
  }
}
