import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformHealthComponent } from './platform-health.component';

describe('PlatformHealthComponent', () => {
  let component: PlatformHealthComponent;
  let fixture: ComponentFixture<PlatformHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
