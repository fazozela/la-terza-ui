import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoriesLayoutComponent } from './product-categories-layout.component';

describe('ProductCategoriesLayoutComponent', () => {
  let component: ProductCategoriesLayoutComponent;
  let fixture: ComponentFixture<ProductCategoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCategoriesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCategoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
