import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListingsComponent } from './city-listings.component';

describe('CityListingsComponent', () => {
  let component: CityListingsComponent;
  let fixture: ComponentFixture<CityListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
