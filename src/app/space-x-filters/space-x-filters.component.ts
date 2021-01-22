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
    let regex = /['"]+/g;
    if (this.selectedYear && this.selectedLaunch && this.selectedLand) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch.replace( regex, '')}&land_success=${this.selectedLand.replace(regex, '')}&launch_year=${this.selectedYear}`;
    } else if (this.selectedLaunch && this.selectedLand) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch.replace( regex, '')}&land_success=${this.selectedLand.replace(regex, '')}`;
    } else if (this.selectedLaunch && this.selectedYear) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch.replace(regex,'')}&launch_year=${this.selectedYear}`;
    } else if (this.selectedYear && this.selectedLand) {
      url = `${BASE_URL}&launch_year=${this.selectedYear}&land_success=${this.selectedLand.replace(regex, '')}`;
    } else if (this.selectedYear) {
      url = `${BASE_URL}&launch_year=${this.selectedYear}`;
    } else if (this.selectedLaunch) {
      url = `${BASE_URL}&launch_success=${this.selectedLaunch.replace(regex,'')}`;
    } else if (this.selectedLand) {
      url = `${BASE_URL}&land_success=${this.selectedLand.replace(regex,'')}`;
    } else {
      url = `${BASE_URL}`;
    }
    this.spinner.show();
    this.http.get(url).subscribe((res: any) => {
      this.spaceXApiData.setSpaceXData(res);
      this.finishedLoading.emit(true);
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  onYearSelect(e, year) {
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
  onLaunchSuccess(e) {
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

  onLandingSuccess(e) {
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
