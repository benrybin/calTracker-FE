import { NgModule } from '@angular/core';
import { LayoutGridComponent } from './layout-grid/layout-grid.component';
import { GridTopComponent } from './grid-top/grid-top.component';
import { RouterModule } from '@angular/router';
import { RegisterMealPageComponent } from './pages/register-meal-page/reigster-meal-page.component';
import { ComponentModule } from '../components/components.module';
import { RouterControlComponent } from './router-control/router-control.component';
import { DailyPageComponent } from './pages/daily-page/daily-page.component';
import { BrowserModule } from '@angular/platform-browser';

const layoutComponents = [LayoutGridComponent, GridTopComponent, RouterControlComponent];
const pages = [RegisterMealPageComponent, DailyPageComponent];
@NgModule({
  imports: [RouterModule, ComponentModule, BrowserModule],
  declarations: [...layoutComponents, ...pages],
  exports: [...layoutComponents, ...pages]
})
export class LayoutModule {}
