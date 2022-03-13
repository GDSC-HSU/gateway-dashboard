import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrgComponent } from './info-org.component';

describe('InfoOrgComponent', () => {
  let component: InfoOrgComponent;
  let fixture: ComponentFixture<InfoOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
