import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformReviewChecklistComponent } from './platform-review-checklist.component';

describe('PlatformReviewChecklistComponent', () => {
  let component: PlatformReviewChecklistComponent;
  let fixture: ComponentFixture<PlatformReviewChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformReviewChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformReviewChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
