import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerReportMonthSearchComponent } from './hamburguer-report-month-search.component';

describe('HamburguerReportMonthSearchComponent', () => {
  let component: HamburguerReportMonthSearchComponent;
  let fixture: ComponentFixture<HamburguerReportMonthSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguerReportMonthSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburguerReportMonthSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
