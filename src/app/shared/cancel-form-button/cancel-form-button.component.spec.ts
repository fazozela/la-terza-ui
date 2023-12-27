import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelFormButtonComponent } from './cancel-form-button.component';

describe('CancelFormButtonComponent', () => {
  let component: CancelFormButtonComponent;
  let fixture: ComponentFixture<CancelFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelFormButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
