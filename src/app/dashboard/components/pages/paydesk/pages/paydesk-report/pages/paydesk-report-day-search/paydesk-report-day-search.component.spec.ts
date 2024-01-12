import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskReportDaySearchComponent } from './paydesk-report-day-search.component';

describe('PaydeskReportDaySearchComponent', () => {
  let component: PaydeskReportDaySearchComponent;
  let fixture: ComponentFixture<PaydeskReportDaySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskReportDaySearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskReportDaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
