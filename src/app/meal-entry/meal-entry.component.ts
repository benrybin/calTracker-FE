import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-entry',
  templateUrl: './meal-entry.component.html',
  styleUrls: ['./meal-entry.component.css']
})
export class MealEntryComponent implements OnInit {
  currentMeal: Meal;
  currentDate:String;
  typeofmeal = ["Breakfast","Lunch","Dinner"];
  meal: String;
  constructor(private mealService:MealService) { }

  ngOnInit() {
    this.currentMeal= new Meal();
    this.createDate();
    //this.currentMeal.setCalCount(500);
    
   
  }
  createDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.currentDate = mm + '/' + dd + '/' + yyyy;
  }
onSubmit(calories:number,meal:String){
  
  this.currentMeal.setCalCount(calories);
  this.currentMeal.setDate(this.currentDate);
  this.currentMeal.setMealType(meal);
  this.mealService.addMeal(this.currentMeal).subscribe();
  console.log(this.meal);
  //console.log(this.currentMeal)


}
}
