import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTrComponent } from './landing-tr.component';

describe('LandingTrComponent', () => {
  let component: LandingTrComponent;
  let fixture: ComponentFixture<LandingTrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
