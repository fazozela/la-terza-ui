import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubsidiariesComponent } from './edit-subsidiaries.component';

describe('EditSubsidiariesComponent', () => {
  let component: EditSubsidiariesComponent;
  let fixture: ComponentFixture<EditSubsidiariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSubsidiariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSubsidiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
