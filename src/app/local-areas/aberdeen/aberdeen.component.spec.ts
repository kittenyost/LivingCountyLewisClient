import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberdeenComponent } from './aberdeen.component';

describe('AberdeenComponent', () => {
  let component: AberdeenComponent;
  let fixture: ComponentFixture<AberdeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AberdeenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AberdeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
