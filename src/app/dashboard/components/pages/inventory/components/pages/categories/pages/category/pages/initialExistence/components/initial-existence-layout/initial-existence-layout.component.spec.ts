import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExistenceLayoutComponent } from './initial-existence-layout.component';

describe('InitialExistenceLayoutComponent', () => {
  let component: InitialExistenceLayoutComponent;
  let fixture: ComponentFixture<InitialExistenceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialExistenceLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialExistenceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
