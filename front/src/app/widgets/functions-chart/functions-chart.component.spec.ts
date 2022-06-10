import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsChartComponent } from './functions-chart.component';

describe('FunctionsChartComponent', () => {
  let component: FunctionsChartComponent;
  let fixture: ComponentFixture<FunctionsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
