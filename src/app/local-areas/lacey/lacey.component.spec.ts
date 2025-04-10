import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaceyComponent } from './lacey.component';

describe('LaceyComponent', () => {
  let component: LaceyComponent;
  let fixture: ComponentFixture<LaceyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaceyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaceyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
