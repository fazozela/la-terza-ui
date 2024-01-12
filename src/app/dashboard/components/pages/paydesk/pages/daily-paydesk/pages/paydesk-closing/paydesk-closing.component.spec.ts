import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskClosingComponent } from './paydesk-closing.component';

describe('PaydeskClosingComponent', () => {
  let component: PaydeskClosingComponent;
  let fixture: ComponentFixture<PaydeskClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskClosingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
