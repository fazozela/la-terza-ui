import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskLayoutComponent } from './paydesk-layout.component';

describe('PaydeskLayoutComponent', () => {
  let component: PaydeskLayoutComponent;
  let fixture: ComponentFixture<PaydeskLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
