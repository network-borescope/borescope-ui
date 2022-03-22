import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterglChartComponent } from './scattergl-chart.component';

describe('ScatterglChartComponent', () => {
  let component: ScatterglChartComponent;
  let fixture: ComponentFixture<ScatterglChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterglChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterglChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
