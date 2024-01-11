import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSelledProductsReportMonthSearchComponent } from './most-selled-products-report-month-search.component';

describe('ReportMonthSearchComponent', () => {
  let component: MostSelledProductsReportMonthSearchComponent;
  let fixture: ComponentFixture<MostSelledProductsReportMonthSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostSelledProductsReportMonthSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostSelledProductsReportMonthSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
