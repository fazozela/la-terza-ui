import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiariesLayoutComponent } from './subsidiaries-layout.component';

describe('SubsidiariesLayoutComponent', () => {
  let component: SubsidiariesLayoutComponent;
  let fixture: ComponentFixture<SubsidiariesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsidiariesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubsidiariesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
