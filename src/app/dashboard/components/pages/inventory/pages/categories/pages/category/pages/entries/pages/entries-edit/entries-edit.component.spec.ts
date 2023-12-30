import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesEditComponent } from './entries-edit.component';

describe('EntriesEditComponent', () => {
  let component: EntriesEditComponent;
  let fixture: ComponentFixture<EntriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntriesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
