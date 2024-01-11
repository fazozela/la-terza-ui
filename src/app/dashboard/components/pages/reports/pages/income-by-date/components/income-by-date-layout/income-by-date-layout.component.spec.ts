import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeByDateLayoutComponent } from './income-by-date-layout.component';

describe('IncomeByDateLayoutComponent', () => {
  let component: IncomeByDateLayoutComponent;
  let fixture: ComponentFixture<IncomeByDateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeByDateLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeByDateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
