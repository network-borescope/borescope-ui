import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterglComponent } from './scattergl.component';

describe('ScatterglComponent', () => {
  let component: ScatterglComponent;
  let fixture: ComponentFixture<ScatterglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterglComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
