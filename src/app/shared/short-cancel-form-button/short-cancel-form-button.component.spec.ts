import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCancelFormButtonComponent } from './short-cancel-form-button.component';

describe('ShortCancelFormButtonComponent', () => {
  let component: ShortCancelFormButtonComponent;
  let fixture: ComponentFixture<ShortCancelFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortCancelFormButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortCancelFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
