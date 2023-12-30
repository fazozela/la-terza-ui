import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCreateLayoutComponent } from './sale-create-layout.component';

describe('SaleCreateLayoutComponent', () => {
  let component: SaleCreateLayoutComponent;
  let fixture: ComponentFixture<SaleCreateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleCreateLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleCreateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
