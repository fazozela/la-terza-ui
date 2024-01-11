import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryStatusReportMonthSearchComponent } from './inventory-status-report-month-search.component';

describe('ReportMonthSearchComponent', () => {
  let component: InventoryStatusReportMonthSearchComponent;
  let fixture: ComponentFixture<InventoryStatusReportMonthSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryStatusReportMonthSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryStatusReportMonthSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
