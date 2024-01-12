import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskStartComponent } from './paydesk-start.component';

describe('PaydeskStartComponent', () => {
  let component: PaydeskStartComponent;
  let fixture: ComponentFixture<PaydeskStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
