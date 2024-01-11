import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeByDateReportDaySearchComponent } from './income-by-date-report-day-search.component';

describe('IncomeByDateReportDaySearchComponent', () => {
  let component: IncomeByDateReportDaySearchComponent;
  let fixture: ComponentFixture<IncomeByDateReportDaySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeByDateReportDaySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeByDateReportDaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
