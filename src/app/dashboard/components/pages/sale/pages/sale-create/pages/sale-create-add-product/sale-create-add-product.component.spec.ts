import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreateAddProductComponent } from './sale-create-add-product.component';

describe('SaleCreateAddProductComponent', () => {
  let component: SaleCreateAddProductComponent;
  let fixture: ComponentFixture<SaleCreateAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleCreateAddProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleCreateAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
