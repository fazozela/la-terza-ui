import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExistenceEditComponent } from './initial-existence-edit.component';

describe('InitialExistenceEditComponent', () => {
  let component: InitialExistenceEditComponent;
  let fixture: ComponentFixture<InitialExistenceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialExistenceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialExistenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
