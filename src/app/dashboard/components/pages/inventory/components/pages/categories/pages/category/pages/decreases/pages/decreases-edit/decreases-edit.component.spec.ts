import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasesEditComponent } from './decreases-edit.component';

describe('DecreasesEditComponent', () => {
  let component: DecreasesEditComponent;
  let fixture: ComponentFixture<DecreasesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecreasesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecreasesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
