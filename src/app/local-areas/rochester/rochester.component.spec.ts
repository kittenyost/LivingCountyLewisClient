import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RochesterComponent } from './rochester.component';

describe('RochesterComponent', () => {
  let component: RochesterComponent;
  let fixture: ComponentFixture<RochesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RochesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RochesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
