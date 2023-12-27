import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasesLayoutComponent } from './decreases-layout.component';

describe('DecreasesLayoutComponent', () => {
  let component: DecreasesLayoutComponent;
  let fixture: ComponentFixture<DecreasesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecreasesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecreasesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
