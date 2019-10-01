import { Component, OnInit } from '@angular/core';
import { Snack } from 'src/app/models/snack';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-snack-entry',
  templateUrl: './snack-entry.component.html',
  styleUrls: ['./snack-entry.component.css']
})
export class SnackEntryComponent implements OnInit {
  currentSnack: Snack;
  currentDate: String;
  response: any;
  constructor(private mealService: MealService) { }

  ngOnInit() {

    this.currentSnack = new Snack();
    this.currentDate = this.mealService.createDate();
  }

  onSubmit(calories: number){
    this.currentSnack.setCalCount(calories);
    this.currentSnack.setDate(this.currentDate);
    this.mealService.addSnack(this.currentSnack).subscribe(res => this.response = res);
  }

}
