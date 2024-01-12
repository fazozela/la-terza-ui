import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydeskPageComponent } from './paydesk-page.component';

describe('PaydeskPageComponent', () => {
  let component: PaydeskPageComponent;
  let fixture: ComponentFixture<PaydeskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydeskPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydeskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
