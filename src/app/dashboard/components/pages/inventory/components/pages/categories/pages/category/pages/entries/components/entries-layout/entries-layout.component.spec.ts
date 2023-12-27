import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesLayoutComponent } from './entries-layout.component';

describe('EntriesLayoutComponent', () => {
  let component: EntriesLayoutComponent;
  let fixture: ComponentFixture<EntriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntriesLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
