import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SpaceXFiltersComponent } from './space-x-filters/space-x-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXLaunchDetailsComponent } from './space-x-launch-details/space-x-launch-details.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        SpaceXFiltersComponent,
        SpaceXLaunchDetailsComponent
      ],
    }).compileComponents();
  }));

});
