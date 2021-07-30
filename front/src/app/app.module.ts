import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';

import { TopBarComponent } from './bars/top-bar/top-bar.component';
import { ChartsBarComponent } from './bars/charts-bar/charts-bar.component';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './widgets/map/map.component';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from './widgets/line-chart/line-chart.component';
import { FiltersComponent } from './widgets/filters/filters.component';
import { ConfigBarComponent } from './bars/config-bar/config-bar.component';
import { AlertsComponent } from './widgets/alerts/alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    BarChartComponent,
    LineChartComponent,
    TopBarComponent,
    ChartsBarComponent,
    ConfigBarComponent,
    FiltersComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
  ],
  providers: [
    AppInitService,
    {
        provide: APP_INITIALIZER,
        multi: true,
        deps: [AppInitService],
        useFactory: (appInit: AppInitService) => {
            return () => {
                return appInit.init();
            };
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
