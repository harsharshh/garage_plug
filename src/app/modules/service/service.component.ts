import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/service/shared.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  serviceData: any[] = [];

  constructor(private sharedService: SharedService) {
  }

  cards = [
    {
      id: 1,
      imageUrl: 'assets/car-service-pack/003-automobile.svg',
      title: 'Auto Mobile',
      selected: false
    },
    {
      id: 2,
      imageUrl: 'assets/car-service-pack/061-mechanical.svg',
      title: 'Mechanical',
      selected: false
    },
    {
      id: 3,
      imageUrl: 'assets/car-service-pack/015-maintenance-1.svg',
      title: 'Maintenance',
      selected: false
    },
    {
      id: 4,
      imageUrl: 'assets/car-service-pack/076-service-call.svg',
      title: 'Service Call',
      selected: false
    },
    {
      id: 5,
      imageUrl: 'assets/car-service-pack/081-car-service-10.svg',
      title: 'Car Service',
      selected: false
    },
    {
      id: 6,
      imageUrl: 'assets/car-service-pack/068-repair-3.svg',
      title: 'Repair',
      selected: false
    },
    {
      id: 7,
      imageUrl: 'assets/car-service-pack/059-mechanic-2.svg',
      title: 'Mechanic',
      selected: false
    },
    {
      id: 8,
      imageUrl: 'assets/car-service-pack/065-oil-funnel.svg',
      title: 'Oil Funnel',
      selected: false
    },
    {
      id: 9,
      imageUrl: 'assets/car-service-pack/062-tow.svg',
      title: 'Car Tow',
      selected: false
    }
  ];

  ngOnInit(): void {
    this.sharedService.serviceDataSubscriptionData.subscribe(res => {
      if (!!res && res.length > 0) {
        this.serviceData = res;
        const data = res.map(res => res.id);
        this.cards = this.cards.map(res => {
          if (data.includes(res.id)) {
            res.selected = true;
          } else {
            res.selected = false;
          }
          return res;
        })
      } else {
        this.serviceData = [];
      }
    })
  }

  setData(event) {
    if (event.type == 'increase') {
      this.cards = this.cards.map(res => {
        if (res.id === event.data.id) {
          res.selected = true;
        }
        return res;
      });
      this.serviceData.push(event.data);

    } else {
      this.cards = this.cards.map(res => {
        if (res.id === event.data.id) {
          res.selected = false;
        }
        return res;
      });
      this.serviceData = this.serviceData.filter(res => {
        return res.id !== event.data.id;
      });
    }
    this.sharedService.setServiceData(this.serviceData);
  }

}
