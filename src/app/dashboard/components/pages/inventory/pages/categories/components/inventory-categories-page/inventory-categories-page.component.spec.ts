import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCategoriesPageComponent } from './inventory-categories-page.component';

describe('InventoryCategoriesPageComponent', () => {
  let component: InventoryCategoriesPageComponent;
  let fixture: ComponentFixture<InventoryCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryCategoriesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
