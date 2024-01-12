import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskReportComponent } from './paydesk-report.component';

describe('PaydeskReportComponent', () => {
  let component: PaydeskReportComponent;
  let fixture: ComponentFixture<PaydeskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
