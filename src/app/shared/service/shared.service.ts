import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private serviceData: any;
  private carData: any;
  private isActionDone: boolean;

  private isActionDoneSource = new BehaviorSubject(this.isActionDone);
  isActionDoneResponse$ = this.isActionDoneSource.asObservable();
  private serviceDataSource = new BehaviorSubject(this.serviceData);
  serviceDataSubscriptionData = this.serviceDataSource.asObservable();
  private carDataSource = new BehaviorSubject(this.carData);
  carSubscriptionData = this.carDataSource.asObservable();


  storeDataToLocalStorage(key, data?: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setAction(value) {
    this.isActionDoneSource.next(value);
  }

  setServiceData(value) {
    this.serviceDataSource.next(value);
  }

  setCarData(value) {
    this.carDataSource.next(value);
  }


}

