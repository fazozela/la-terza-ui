import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExistenceListComponent } from './initial-existence-list.component';

describe('InitialExistenceListComponent', () => {
  let component: InitialExistenceListComponent;
  let fixture: ComponentFixture<InitialExistenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialExistenceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitialExistenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
