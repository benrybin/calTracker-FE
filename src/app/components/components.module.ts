import { NgModule } from '@angular/core';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DailyTrackerComponent} from 'src/app/components/daily-tracker/daily-tracker.component';
import { SnackEntryComponent } from './snack-entry/snack-entry.component'

const components = [MealEntryComponent,DailyTrackerComponent,SnackEntryComponent];

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [...components],
  exports: [...components]
})
export class ComponentModule {}
