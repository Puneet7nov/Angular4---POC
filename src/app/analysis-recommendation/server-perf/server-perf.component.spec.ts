import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPerfComponent } from './server-perf.component';

describe('ServerPerfComponent', () => {
  let component: ServerPerfComponent;
  let fixture: ComponentFixture<ServerPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
