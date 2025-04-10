import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmaComponent } from './elma.component';

describe('ElmaComponent', () => {
  let component: ElmaComponent;
  let fixture: ComponentFixture<ElmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
