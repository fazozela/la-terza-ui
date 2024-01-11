import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubsidiariesComponent } from './create-subsidiaries.component';

describe('CreateSubsidiariesComponent', () => {
  let component: CreateSubsidiariesComponent;
  let fixture: ComponentFixture<CreateSubsidiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSubsidiariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSubsidiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
