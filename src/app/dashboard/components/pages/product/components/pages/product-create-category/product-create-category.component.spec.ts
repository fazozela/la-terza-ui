import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateCategoryComponent } from './product-create-category.component';

describe('ProductCreateCategoryComponent', () => {
  let component: ProductCreateCategoryComponent;
  let fixture: ComponentFixture<ProductCreateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCreateCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
