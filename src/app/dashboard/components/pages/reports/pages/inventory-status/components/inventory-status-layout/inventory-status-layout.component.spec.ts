import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStatusLayoutComponent } from './inventory-status-layout.component';

describe('ReportsLayoutComponent', () => {
  let component: ReportLayoutComponent;
  let fixture: ComponentFixture<ReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
