import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwInfoComponent } from './hw-info.component';

describe('HwInfoComponent', () => {
  let component: HwInfoComponent;
  let fixture: ComponentFixture<HwInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
