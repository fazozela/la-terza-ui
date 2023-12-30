import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditAddProductComponent } from './sale-edit-add-product.component';

describe('SaleEditAddProductComponent', () => {
  let component: SaleEditAddProductComponent;
  let fixture: ComponentFixture<SaleEditAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEditAddProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleEditAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
