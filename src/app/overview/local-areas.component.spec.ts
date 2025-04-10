import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalAreasComponent } from './local-areas.component';

describe('LocalAreasComponent', () => {
  let component: LocalAreasComponent;
  let fixture: ComponentFixture<LocalAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
