import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskReportLayoutComponent } from './paydesk-report-layout.component';

describe('PaydeskReportLayoutComponent', () => {
  let component: PaydeskReportLayoutComponent;
  let fixture: ComponentFixture<PaydeskReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskReportLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
