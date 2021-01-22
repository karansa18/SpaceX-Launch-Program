import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceXDataService } from '../space-x-data.service';

@Component({
  selector: 'app-space-x-filters',
  templateUrl: './space-x-filters.component.html',
  styleUrls: ['./space-x-filters.component.css'],
})
export class SpaceXFiltersComponent implements OnInit,AfterViewInit {
  public years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();

  selectedYear = null;
  selectedLaunch = null;
  selectedLand = null;

  constructor(
    private http: HttpClient,
    private spaceXApiData: SpaceXDataService
  ) {}

  ngOnInit(): void {
    this.spaceXData();
   
  }

  ngAfterViewInit(){
   // document.getElementById("2006").classList.add('active');
  }

  spaceXData() {
    let url = '';
    let regex = /['"]+/g;
    if(this.selectedYear && this.selectedLaunch && this.selectedLand){
      url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.selectedLaunch.replace(regex,'')}&land_success=${this.selectedLand.replace(regex,'')}&launch_year=${this.selectedYear}`
    }
    else if(this.selectedLaunch && this.selectedLand){
      url =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.selectedLaunch.replace(regex,'')}&land_success=${this.selectedLand.replace(regex,'')}`;
    }
    else if(this.selectedLaunch && this.selectedYear){
      url =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.selectedLaunch.replace(regex,'')}&launch_year=${this.selectedYear}`;
    }
    else if(this.selectedYear && this.selectedLand){
      url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${this.selectedYear}&land_success=${this.selectedLand.replace(regex,'')}`;
    }
    else if(this.selectedYear){
      url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${this.selectedYear}`;
    }
    else if(this.selectedLaunch){
      url =`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${this.selectedLaunch.replace(regex,'')}`;
    }
    else if(this.selectedLand){
      url =`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${this.selectedLand.replace(regex,'')}`;
    }

    else{
      url = "https://api.spacexdata.com/v3/launches?limit=100";
    }

    this.http.get(url).subscribe((res:any) => {
      this.spaceXApiData.setSpaceXData(res);
      this.finishedLoading.emit(true);
    });
  }

  onYearSelect(e,year) {
    let clickedElement = e.target;
    this.selectedYear = +year;
    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        '.active'
      );
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
      this.spaceXData();
    }
  }
  onLaunchSuccess(e,val) {
    let clickedElement = e.target;
    this.selectedLaunch = e.target.value;
    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        '.active'
      );
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
    this.spaceXData();
  }

  onLandingSuccess(e,val) {
    let clickedElement = e.target;
    this.selectedLand = e.target.value;
    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        '.active'
      );
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
      this.spaceXData();
    }
  }


}
