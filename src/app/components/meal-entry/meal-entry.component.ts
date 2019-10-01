import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealService } from '../../services/meal.service';
import { RegisterMealPageComponent } from 'src/app/containers/pages/register-meal-page/reigster-meal-page.component';

@Component({
  selector: 'app-meal-entry',
  templateUrl: './meal-entry.component.html',
  styleUrls: ['./meal-entry.component.css']
})
export class MealEntryComponent implements OnInit {
  currentMeal: Meal;
  currentDate: String;
  meal: string;
  response: any;
  typeofmeal = [];
  typeofMealsEntered:String[]=[];
  
  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.currentMeal = new Meal();
    this.currentDate =this.mealService.createDate();
    this.mealService.mealTypesList(this.currentDate).subscribe(types => {this.typeofmeal = types;
   });
    
   
  }
  onSubmit(calories: number, meal: string) {
   
    var state: any = false;;
    this.createMeal(calories,meal);
    if(this.currentMeal.mealType == null){
      alert("Please enter meal")
      return;
    }
    if(this.currentMeal.mealType.includes("Breakfast")|| this.currentMeal.mealType.includes("Lunch")||this.currentMeal.mealType.includes("Dinner")){
      this.mealService.addMeal(this.currentMeal).subscribe(res => {state =res;
      if(state){
        this.removeMealType(this.currentMeal.mealType);
        console.log(state);
        }});
      }else{alert("No Hack Please")}
    }
  
  removeMealType(temp: String){
   this.typeofmeal = this.typeofmeal.filter(meal => meal!=temp);
  }

  createMeal(calories: number,meal: string){
    this.currentMeal.setCalCount(calories);
    this.currentMeal.setDate(this.currentDate);
    this.currentMeal.setMealType(meal);

  }
  

}
