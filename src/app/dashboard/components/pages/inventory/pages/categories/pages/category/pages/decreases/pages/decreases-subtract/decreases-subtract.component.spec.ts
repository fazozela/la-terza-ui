import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasesSubtractComponent } from './decreases-subtract.component';

describe('DecreasesSubtractComponent', () => {
  let component: DecreasesSubtractComponent;
  let fixture: ComponentFixture<DecreasesSubtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecreasesSubtractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecreasesSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
