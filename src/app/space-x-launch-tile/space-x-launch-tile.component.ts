import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space-x-launch-tile',
  templateUrl: './space-x-launch-tile.component.html',
  styleUrls: ['./space-x-launch-tile.component.css']
})
export class SpaceXLaunchTileComponent implements OnInit {

  @Input() tileData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
