import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OakvilleComponent } from './oakville.component';

describe('OakvilleComponent', () => {
  let component: OakvilleComponent;
  let fixture: ComponentFixture<OakvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OakvilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OakvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
