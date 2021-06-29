import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css']
})
export class ConfigBarComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
  }

  toggleConfigVisibility(configId: string) {
    const obj = this.global.getGlobal('config_widgets');

    obj.value[configId] = !obj.value[configId];
    this.global.setGlobal(obj);
  }

  isConfigVisible(configId: string): boolean {
    const obj = this.global.getGlobal('config_widgets');
    return obj.value[configId];
  }
}
