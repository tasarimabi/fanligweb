import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEnComponent } from './landing-en.component';

describe('LandingEnComponent', () => {
  let component: LandingEnComponent;
  let fixture: ComponentFixture<LandingEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
