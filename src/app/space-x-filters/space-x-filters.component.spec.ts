import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXFiltersComponent } from './space-x-filters.component';
import { HttpClientModule } from '@angular/common/http';

describe('SpaceXFiltersComponent', () => {
  let component: SpaceXFiltersComponent;
  let fixture: ComponentFixture<SpaceXFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ SpaceXFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
