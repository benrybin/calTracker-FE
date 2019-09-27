import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private url = "http://localhost:8080/addmeal";


  constructor(private http:HttpClient) { }


  public addMeal(meal: Meal){

    return this.http.post<Meal>(this.url,meal);
  }
}
