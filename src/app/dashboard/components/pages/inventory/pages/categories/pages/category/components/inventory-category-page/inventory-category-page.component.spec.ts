import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCategoryPageComponent } from './inventory-category-page.component';

describe('InventoryCategoryPageComponent', () => {
  let component: InventoryCategoryPageComponent;
  let fixture: ComponentFixture<InventoryCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
