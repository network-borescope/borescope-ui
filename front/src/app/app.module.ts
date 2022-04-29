import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularDraggableModule } from 'angular2-draggable';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';

import { TopBarComponent } from './bars/top-bar/top-bar.component';
import { ChartsBarComponent } from './bars/charts-bar/charts-bar.component';

import { HomeComponent } from './home/home.component';
import { MapComponent } from './widgets/map/map.component';
import { BarChartComponent } from './widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from './widgets/line-chart/line-chart.component';
import { FiltersComponent } from './widgets/filters/filters.component';
import { AlertsComponent } from './widgets/alerts/alerts.component';
import { NetworkComponent } from './widgets/network/network.component';
import { TimeBarComponent } from './bars/time-bar/time-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    BarChartComponent,
    LineChartComponent,
    TopBarComponent,
    ChartsBarComponent,
    FiltersComponent,
    AlertsComponent,
    NetworkComponent,
    TimeBarComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot(),
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
