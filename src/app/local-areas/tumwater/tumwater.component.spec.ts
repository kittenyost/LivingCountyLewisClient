import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumwaterComponent } from './tumwater.component';

describe('TumwaterComponent', () => {
  let component: TumwaterComponent;
  let fixture: ComponentFixture<TumwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TumwaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
