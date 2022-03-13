import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTotalComponent } from './header-total.component';

describe('HeaderTotalComponent', () => {
  let component: HeaderTotalComponent;
  let fixture: ComponentFixture<HeaderTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
