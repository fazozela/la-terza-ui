import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeByDateComponent } from './income-by-date.component';

describe('IncomeByDateComponent', () => {
  let component: IncomeByDateComponent;
  let fixture: ComponentFixture<IncomeByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeByDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
