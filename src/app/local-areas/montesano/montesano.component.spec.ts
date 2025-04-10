import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontesanoComponent } from './montesano.component';

describe('MontesanoComponent', () => {
  let component: MontesanoComponent;
  let fixture: ComponentFixture<MontesanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontesanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontesanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
