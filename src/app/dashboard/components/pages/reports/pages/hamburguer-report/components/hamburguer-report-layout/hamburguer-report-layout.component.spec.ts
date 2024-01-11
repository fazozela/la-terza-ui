import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerReportLayoutComponent } from './hamburguer-report-layout.component';

describe('HamburguerReportLayoutComponent', () => {
  let component: HamburguerReportLayoutComponent;
  let fixture: ComponentFixture<HamburguerReportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguerReportLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamburguerReportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
