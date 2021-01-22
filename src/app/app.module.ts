import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXFiltersComponent } from './space-x-filters/space-x-filters.component';
import { SpaceXLaunchTileComponent } from './space-x-launch-tile/space-x-launch-tile.component';
import { SpaceXLaunchDetailsComponent } from './space-x-launch-details/space-x-launch-details.component';
import { SpaceXDataService } from './space-x-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXFiltersComponent,
    SpaceXLaunchDetailsComponent,
    SpaceXLaunchTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpaceXDataService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
