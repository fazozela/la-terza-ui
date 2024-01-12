import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskSummaryComponent } from './paydesk-summary.component';

describe('PaydeskSummaryComponent', () => {
  let component: PaydeskSummaryComponent;
  let fixture: ComponentFixture<PaydeskSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
