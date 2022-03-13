import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCardDetailComponent } from './device-card-detail.component';

describe('DeviceCardDetailComponent', () => {
  let component: DeviceCardDetailComponent;
  let fixture: ComponentFixture<DeviceCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
