import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal';
import { NgModule } from '@angular/core';
import { Snack } from 'src/app/models/snack';
@Component({
  selector: 'app-daily-tracker',
  templateUrl: './daily-tracker.component.html',
  styleUrls: ['./daily-tracker.component.css']
})
export class DailyTrackerComponent implements OnInit {
  dailyMeals: Meal[]=[];
  dailySnacks: Snack[]=[];
  date: String;
  totalDailyCalories: number;
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.date = this.mealService.createDate();
    this.mealService.getDailyMeals(this.date).subscribe(response => this.dailyMeals = response);
    this.mealService.dailySnacks(this.date).subscribe(response => this.dailySnacks = response);
    this.totalCaloriesDay();
    
  }

  onSubmit(){
    
    
  }

  totalCaloriesDay(){
    var calMeals: number;
    var calSnacks: number;
    this.dailyMeals.forEach(holder => calMeals += holder.calCount);
    this.dailySnacks.forEach(holder => calSnacks += holder.calCount);
    this.totalDailyCalories =calMeals + calSnacks; 



  }
  
}
