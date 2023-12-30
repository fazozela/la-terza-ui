import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCreateCategoryComponent } from './inventory-create-category.component';

describe('InventoryCreateCategoryComponent', () => {
  let component: InventoryCreateCategoryComponent;
  let fixture: ComponentFixture<InventoryCreateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCreateCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCreateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
