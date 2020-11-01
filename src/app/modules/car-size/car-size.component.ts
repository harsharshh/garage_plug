import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../shared/service/shared.service';

@Component({
  selector: 'app-car-size',
  templateUrl: './car-size.component.html',
  styleUrls: ['./car-size.component.scss']
})
export class CarSizeComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  sizeData = [];

  ngOnInit(): void {
    this.sharedService.carSubscriptionData.subscribe(res => {
      if (!!res && res.length > 0) {
        this.sizeData = res;
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
        this.sizeData = [];
      }
    })
  }

  cards = [
    {
      id: 1,
      imageUrl: 'assets/car-pack/005-car-1.svg',
      title: 'Small',
      selected: false
    },
    {
      id: 2,
      imageUrl: 'assets/car-pack/006-car-2.svg',
      title: 'Sedan',
      selected: false
    },
    {
      id: 3,
      imageUrl: 'assets/car-pack/007-car-3.svg',
      title: 'Hatchback',
      selected: false
    },
    {
      id: 4,
      imageUrl: 'assets/car-pack/017-car-10.svg',
      title: 'Mini van',
      selected: false
    },
    {
      id: 5,
      imageUrl: 'assets/car-pack/021-car-13.svg',
      title: 'Supercar',
      selected: false
    },
    {
      id: 6,
      imageUrl: 'assets/car-pack/023-car-15.svg',
      title: 'SUV',
      selected: false
    },
    {
      id: 7,
      imageUrl: 'assets/car-pack/011-car-5.svg',
      title: 'Pickup truck',
      selected: false
    },
    {
      id: 8,
      imageUrl: 'assets/car-pack/033-truck-2.svg',
      title: 'Van',
      selected: false
    },
    {
      id: 9,
      imageUrl: 'assets/car-pack/032-truck-1.svg',
      title: 'Suv',
      selected: false
    }];

  setData(event) {
    if (event.type == 'increase') {
      this.cards = this.cards.map(res => {
        if (res.id === event.data.id) {
          res.selected = true;
        }
        return res;
      });
      this.sizeData.push(event.data);

    } else {
      this.cards = this.cards.map(res => {
        if (res.id === event.data.id) {
          res.selected = false;
        }
        return res;
      });
      this.sizeData = this.sizeData.filter(res => {
        return res.id !== event.data.id;
      });
    }
    this.sharedService.setCarData(this.sizeData);
  }


}
