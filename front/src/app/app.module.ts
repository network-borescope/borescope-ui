import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './vis/map/map.component';
import { BarChartComponent } from './vis/bar-chart/bar-chart.component';
import { LineChartComponent } from './vis/line-chart/line-chart.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { Line } from './vis/line-chart/line';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    BarChartComponent,
    LineChartComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [Line],
  bootstrap: [AppComponent]
})
export class AppModule { }
