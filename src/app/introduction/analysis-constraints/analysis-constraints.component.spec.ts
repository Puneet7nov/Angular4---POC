import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisConstraintsComponent } from './analysis-constraints.component';

describe('AnalysisConstraintsComponent', () => {
  let component: AnalysisConstraintsComponent;
  let fixture: ComponentFixture<AnalysisConstraintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisConstraintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
