import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValueCalculatorComponent } from './home-value-calculator.component';

describe('HomeValueCalculatorComponent', () => {
  let component: HomeValueCalculatorComponent;
  let fixture: ComponentFixture<HomeValueCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeValueCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeValueCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
