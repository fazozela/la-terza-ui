import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreateEditProductComponent } from './sale-create-edit-product.component';

describe('SaleCreateEditProductComponent', () => {
  let component: SaleCreateEditProductComponent;
  let fixture: ComponentFixture<SaleCreateEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleCreateEditProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleCreateEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
