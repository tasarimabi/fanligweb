import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBrComponent } from './landing-br.component';

describe('LandingBrComponent', () => {
  let component: LandingBrComponent;
  let fixture: ComponentFixture<LandingBrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
