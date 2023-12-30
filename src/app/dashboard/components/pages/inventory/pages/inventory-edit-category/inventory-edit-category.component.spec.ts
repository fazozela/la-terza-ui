import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEditCategoryComponent } from './inventory-edit-category.component';

describe('InventoryEditCategoryComponent', () => {
  let component: InventoryEditCategoryComponent;
  let fixture: ComponentFixture<InventoryEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryEditCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
