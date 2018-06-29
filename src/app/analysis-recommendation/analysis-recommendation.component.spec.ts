import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisRecommendationComponent } from './analysis-recommendation.component';

describe('AnalysisRecommendationComponent', () => {
  let component: AnalysisRecommendationComponent;
  let fixture: ComponentFixture<AnalysisRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
