import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXDataService {

  private spaceXApiData = new BehaviorSubject<any>([]);

  constructor() {
    
   }
  currentSpaceXApiData = this.spaceXApiData.asObservable();
  setSpaceXData(spaceXApiData){
    this.spaceXApiData.next(spaceXApiData);
  }

}
