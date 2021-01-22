import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXLaunchTileComponent } from './space-x-launch-tile.component';

describe('SpaceXLaunchTileComponent', () => {
  let component: SpaceXLaunchTileComponent;
  let fixture: ComponentFixture<SpaceXLaunchTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXLaunchTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXLaunchTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
