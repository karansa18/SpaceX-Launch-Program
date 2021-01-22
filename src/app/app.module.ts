import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXFiltersComponent } from './space-x-filters/space-x-filters.component';
import { SpaceXLaunchTileComponent } from './space-x-launch-tile/space-x-launch-tile.component';
import { SpaceXLaunchDetailsComponent } from './space-x-launch-details/space-x-launch-details.component';
import { SpaceXDataService } from './space-x-data.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    SpaceXFiltersComponent,
    SpaceXLaunchDetailsComponent,
    SpaceXLaunchTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [SpaceXDataService,
    HttpClientModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
