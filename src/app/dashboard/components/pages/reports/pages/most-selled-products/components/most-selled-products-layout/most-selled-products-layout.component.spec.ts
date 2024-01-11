import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSelledProductsLayoutComponent } from './most-selled-products-layout.component';

describe('MostSelledProductsLayoutComponent', () => {
  let component: MostSelledProductsLayoutComponent;
  let fixture: ComponentFixture<MostSelledProductsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostSelledProductsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostSelledProductsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
