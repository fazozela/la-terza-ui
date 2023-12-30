import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCategoriesLayoutComponent } from './inventory-categories-layout.component';

describe('InventoryCategoriesLayoutComponent', () => {
  let component: InventoryCategoriesLayoutComponent;
  let fixture: ComponentFixture<InventoryCategoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCategoriesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCategoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
