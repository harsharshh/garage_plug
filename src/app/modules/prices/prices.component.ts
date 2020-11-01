import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/service/shared.service';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit  {

  constructor(private sharedService: SharedService) {
  }

  random= Math.floor(Math.random()*10000);
  carSubscription: Subscription;
  serviceSubscription: Subscription;
  carData: any;
  serviceData: any;

  ngOnInit(): void {
    this.carSubscription = this.sharedService.carSubscriptionData.subscribe(res => {
      if (!!res) {
        this.carData = res;
        this.carData.map(res=> {
          res.selected = false;
          return res;
        });
      }
    });
    this.serviceSubscription = this.sharedService.serviceDataSubscriptionData.subscribe(res => {
      if (!!res) {
        this.serviceData = res;
        this.serviceData.map(res=> {
          res.selected = false;
          return res;
        })
      }
    })
  }





}
