import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlympiaComponent } from './olympia.component';

describe('OlympiaComponent', () => {
  let component: OlympiaComponent;
  let fixture: ComponentFixture<OlympiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlympiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlympiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
