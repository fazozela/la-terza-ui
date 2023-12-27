import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasesListComponent } from './decreases-list.component';

describe('DecreasesListComponent', () => {
  let component: DecreasesListComponent;
  let fixture: ComponentFixture<DecreasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecreasesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecreasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
