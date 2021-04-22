import { Component } from '@angular/core';

import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Borescope User Interface";

  constructor(public globals: GlobalService) {}
}
