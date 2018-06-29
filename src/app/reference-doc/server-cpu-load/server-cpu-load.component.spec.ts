import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCpuLoadComponent } from './server-cpu-load.component';

describe('ServerCpuLoadComponent', () => {
  let component: ServerCpuLoadComponent;
  let fixture: ComponentFixture<ServerCpuLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCpuLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCpuLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
