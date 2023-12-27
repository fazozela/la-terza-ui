import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesAddComponent } from './entries-add.component';

describe('EntriesAddComponent', () => {
  let component: EntriesAddComponent;
  let fixture: ComponentFixture<EntriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntriesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
