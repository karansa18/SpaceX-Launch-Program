import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchDetailsComponent } from './space-x-launch-details.component';

describe('SpaceXLaunchDetailsComponent', () => {
  let component: SpaceXLaunchDetailsComponent;
  let fixture: ComponentFixture<SpaceXLaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
