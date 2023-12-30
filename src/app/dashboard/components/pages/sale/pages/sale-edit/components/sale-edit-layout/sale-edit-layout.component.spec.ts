import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditLayoutComponent } from './sale-edit-layout.component';

describe('SaleEditLayoutComponent', () => {
  let component: SaleEditLayoutComponent;
  let fixture: ComponentFixture<SaleEditLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEditLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleEditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
