import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologyDataTrafficComponent } from './topology-data-traffic.component';

describe('TopologyDataTrafficComponent', () => {
  let component: TopologyDataTrafficComponent;
  let fixture: ComponentFixture<TopologyDataTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopologyDataTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyDataTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
