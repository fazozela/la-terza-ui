import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPaydeskComponent } from './daily-paydesk.component';

describe('DailyPaydeskComponent', () => {
  let component: DailyPaydeskComponent;
  let fixture: ComponentFixture<DailyPaydeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyPaydeskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyPaydeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
