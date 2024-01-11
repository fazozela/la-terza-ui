import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerReportComponent } from './hamburguer-report.component';

describe('HamburguerReportComponent', () => {
  let component: HamburguerReportComponent;
  let fixture: ComponentFixture<HamburguerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguerReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburguerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
