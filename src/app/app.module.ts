import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { DailyTrackerComponent } from './daily-tracker/daily-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    MealEntryComponent,
    DailyTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
