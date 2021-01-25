import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-space-x-launch-tile',
  templateUrl: './space-x-launch-tile.component.html',
  styleUrls: ['./space-x-launch-tile.component.css'],
})
export class SpaceXLaunchTileComponent implements OnInit, OnChanges {
  @Input() tileData: any;
  land_Success = null;
  constructor() {}

  ngOnChanges() {
   this.land_Success = this.tileData?.rocket.first_stage.cores.some(
      (core) => core.land_success === null
    )
      ? 'NA'
      : this.tileData?.rocket.first_stage.cores.every(
          (core) => core.land_success
        );
  }

  ngOnInit(): void {
  this.land_Success =  this.tileData?.rocket.first_stage.cores.some(
      (core) => core.land_success === null
    )
      ? 'NA'
      : this.tileData?.rocket.first_stage.cores.every(
          (core) => core.land_success
        );
      }
}
