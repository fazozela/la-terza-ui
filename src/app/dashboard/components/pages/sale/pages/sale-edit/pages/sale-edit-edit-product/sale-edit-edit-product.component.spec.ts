import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEditEditProductComponent } from './sale-edit-edit-product.component';

describe('SaleEditEditProductComponent', () => {
  let component: SaleEditEditProductComponent;
  let fixture: ComponentFixture<SaleEditEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleEditEditProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleEditEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
