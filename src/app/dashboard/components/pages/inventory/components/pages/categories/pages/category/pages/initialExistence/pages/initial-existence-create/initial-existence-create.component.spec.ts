import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExistenceCreateComponent } from './initial-existence-create.component';

describe('InitialExistenceCreateComponent', () => {
  let component: InitialExistenceCreateComponent;
  let fixture: ComponentFixture<InitialExistenceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialExistenceCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialExistenceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
