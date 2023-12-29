import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditCategoryComponent } from './product-edit-category.component';

describe('ProductEditCategoryComponent', () => {
  let component: ProductEditCategoryComponent;
  let fixture: ComponentFixture<ProductEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
