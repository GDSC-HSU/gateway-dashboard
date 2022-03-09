import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrgComponent } from './new-org.component';

describe('NewOrgComponent', () => {
  let component: NewOrgComponent;
  let fixture: ComponentFixture<NewOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
