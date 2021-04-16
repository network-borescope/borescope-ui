import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './views/map/map.component';
import { BarChartComponent } from './views/graphics/barChart/bar-chart/bar-chart.component';
import { LineChartComponent } from './views/graphics/lineChart/line-chart/line-chart.component';
import { BarComponent } from './views/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    BarChartComponent,
    LineChartComponent,
    BarComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
