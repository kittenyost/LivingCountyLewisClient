import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIntakeViewerComponent } from './admin-intake-viewer.component';

describe('AdminIntakeViewerComponent', () => {
  let component: AdminIntakeViewerComponent;
  let fixture: ComponentFixture<AdminIntakeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminIntakeViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminIntakeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
