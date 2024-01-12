import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPaydeskLayoutComponent } from './daily-paydesk-layout.component';

describe('DailyPaydeskLayoutComponent', () => {
  let component: DailyPaydeskLayoutComponent;
  let fixture: ComponentFixture<DailyPaydeskLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyPaydeskLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyPaydeskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
