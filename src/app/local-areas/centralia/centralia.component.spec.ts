import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentraliaComponent } from './centralia.component';

describe('CentraliaComponent', () => {
  let component: CentraliaComponent;
  let fixture: ComponentFixture<CentraliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentraliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
