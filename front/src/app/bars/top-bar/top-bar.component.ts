import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public global: GlobalService) { }

  ngOnInit(): void {}

}
