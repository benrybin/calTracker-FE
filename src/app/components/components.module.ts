import { NgModule } from '@angular/core';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const components = [MealEntryComponent];

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [...components],
  exports: [...components]
})
export class ComponentModule {}
