import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditProductComponent } from './sale-edit-product.component';

describe('SaleEditProductComponent', () => {
  let component: SaleEditProductComponent;
  let fixture: ComponentFixture<SaleEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEditProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
