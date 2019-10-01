import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Meal } from '../models/meal';
import { Snack } from '../models/snack';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private mainUrl = "http://localhost:8080/";
  private addUrl = "addmeal";
  private dailyUrl = "dailymeals?date=";
  private allMealsUrl = "allmeals";
  private addSnackUrl = "addsnack";
  private snackDailyUrl = "dailysnacks?date="
  private mealTypesEntered = "mealTypes?date="

  constructor(private http:HttpClient) { }


  public addMeal(meal: Meal){

    return this.http.post<Meal>(this.mainUrl + this.addUrl,meal);
  }
  public getDailyMeals(date:String){

    return this.http.get<Meal[]>(this.mainUrl + this.dailyUrl+date);
  }
  public getAllMeals(){
    return this.http.get<Meal[]>(this.mainUrl + this.allMealsUrl)
  }
  //snack methods below
  
  
  public addSnack(snack: Snack){
    return this.http.post<Snack>(this.mainUrl + this.addSnackUrl, snack)
  }
public dailySnacks(date: String){

  return this.http.get<Snack[]>(this.mainUrl +this.snackDailyUrl+ date)

}
public mealTypesList(date: String){
  return this.http.get<String[]>(this.mainUrl + this.mealTypesEntered + date)

}

  createDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    let currentDate; 
    currentDate = mm + '/' + dd + '/' + yyyy;
    return currentDate;
  }
  
}
