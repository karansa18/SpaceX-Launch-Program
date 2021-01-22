import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { SpaceXDataService } from '../space-x-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-space-x-launch-details',
  templateUrl: './space-x-launch-details.component.html',
  styleUrls: ['./space-x-launch-details.component.css'],
})
export class SpaceXLaunchDetailsComponent implements OnInit {
  spaceXData = [];
  tileData = [];
  subscription: Subscription;
  constructor(private spaceXApiData: SpaceXDataService) {}

  ngOnInit(): void {
    this.spaceXDataCall();
  }

  spaceXDataCall() {
    this.subscription = this.spaceXApiData.currentSpaceXApiData.subscribe(
      (data) => (this.spaceXData = data)
    );
  }
}
