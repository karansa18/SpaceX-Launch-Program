import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceXDataService } from '../space-x-data.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-space-x-filters',
  templateUrl: './space-x-filters.component.html',
  styleUrls: ['./space-x-filters.component.css'],
})
export class SpaceXFiltersComponent implements OnInit {
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
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter< boolean>();

  selectedYear = null;
  selectedLaunch = null;
  selectedLand = null;

  constructor(
    private http: HttpClient,
    private spaceXApiData: SpaceXDataService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spaceXData();
  }


  async spaceXData() {
    const BASE_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
    let url = '';
    if (this.selectedYear && this.selectedLaunch && this.selectedLand) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch}&land_success=${this.selectedLand}&launch_year=${this.selectedYear}`;
    } else if (this.selectedLaunch && this.selectedLand) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch}&land_success=${this.selectedLand}`;
    } else if (this.selectedLaunch && this.selectedYear) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch}&launch_year=${this.selectedYear}`;
    } else if (this.selectedYear && this.selectedLand) {
      url = `${BASE_URL}&launch_year=${this.selectedYear}&land_success=${this.selectedLand}`;
    } else if (this.selectedYear) {
      url = `${BASE_URL}&launch_year=${this.selectedYear}`;
    } else if (this.selectedLaunch) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch}`;
    } else if (this.selectedLand) {
      url = `${BASE_URL}&land_success=${this.selectedLand}`;
    } else {
      url = `${BASE_URL}`;
    }
    this.spinner.show();
    this.http.get(url).subscribe((res: any) => {
      this.spaceXApiData.setSpaceXData(res);
      this.spinner.hide();
      this.finishedLoading.emit(true);
      
    });
  }

  onYearSelect(e) {
    let clickedElement = e.target;
    this.selectedYear = this.toggleActiveClass(clickedElement);
    this.spaceXData();
  }
  onLaunchSuccess(e) {
    let clickedElement = e.target;
    this.selectedLaunch = this.toggleActiveClass(clickedElement);
    this.spaceXData();
  }

  onLandingSuccess(e) {
    let clickedElement = e.target;
    this.selectedLand = this.toggleActiveClass(clickedElement);
    this.spaceXData();
  }

  toggleActiveClass(clickedElement){
    let selectedValue = null;
    let regex = /['"]+/g;
    if (clickedElement.nodeName === 'BUTTON') {
      if(clickedElement.classList.contains('active')){
         clickedElement.classList.remove('active');
      }
      else{
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(
        '.active'
      );
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      clickedElement.className += ' active';
      selectedValue = clickedElement.value.replace(regex,'');
    }
    return selectedValue;
    }
  }
}
