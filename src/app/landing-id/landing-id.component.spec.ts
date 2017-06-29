import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIdComponent } from './landing-id.component';

describe('LandingIdComponent', () => {
  let component: LandingIdComponent;
  let fixture: ComponentFixture<LandingIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
