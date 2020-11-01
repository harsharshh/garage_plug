import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() data: any;
  activeCard: number;
  activeCardDetails:any = {
    type: null,
    data: null
  };
  @Output() outputData = new EventEmitter<any>(this.activeCardDetails);


  constructor() {
  }

  ngOnInit(): void {
    if(!!this.data && this.data.selected === true) {
      this.activeCard = this.data.id;
    }
  }

  setActive(data) {
    if (this.activeCard == data.id) {
      this.activeCard = null;
      this.activeCardDetails['type'] = 'decrease';
      this.activeCardDetails['data'] = data;
      this.outputData.emit(this.activeCardDetails);
    } else {
      this.activeCard = data.id;
      this.activeCardDetails['type'] = 'increase';
      this.activeCardDetails['data'] = data;
      this.outputData.emit(this.activeCardDetails);
    }

  }


}
