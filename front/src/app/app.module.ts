import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MapComponent } from './vis/map/map.component';
import { BarChartComponent } from './vis/bar-chart/bar-chart.component';
import { LineChartComponent } from './vis/line-chart/line-chart.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { ConfigComponent } from './views/config/config.component';
import { AppInitService } from './app-init.service';
import { ChartsBarComponent } from './views/charts-bar/charts-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    BarChartComponent,
    LineChartComponent,
    TopBarComponent,
    ConfigComponent,
    ChartsBarComponent,
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
