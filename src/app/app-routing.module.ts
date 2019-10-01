import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterMealPageComponent } from './containers/pages/register-meal-page/reigster-meal-page.component';
import { DailyPageComponent } from './containers/pages/daily-page/daily-page.component';
import { DailyTrackerComponent } from './components/daily-tracker/daily-tracker.component';
import { SnackPageComponent } from './containers/pages/snack-page/snack-page.component';

const routes: Routes = [
  /* Since we don't have a "front page" we just redirect to meal entry. */
  {
    path: '',
    redirectTo: 'meal-entry',
    pathMatch: 'full'
  },
  {
    path: 'meal-entry',
    component: RegisterMealPageComponent
  },
  {
    path: 'today',
    component: DailyPageComponent
  },
  {
    path: 'snack-entry',
    component: SnackPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
