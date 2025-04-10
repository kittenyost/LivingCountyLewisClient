import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChehalisComponent } from './chehalis.component';

describe('ChehalisComponent', () => {
  let component: ChehalisComponent;
  let fixture: ComponentFixture<ChehalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChehalisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChehalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
