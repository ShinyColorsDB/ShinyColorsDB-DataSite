import { Component, Input, OnInit } from '@angular/core';

import { CardProduceAptitude } from '../../interfaces/cardproduceaptitude';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css'],
  host: {
    class: 'justify-content-center d-flex',
  }
})
export class AptitudeComponent implements OnInit {

  @Input()
  public apts!: CardProduceAptitude[];

  constructor() { }

  ngOnInit(): void {

  }

  getAttribute(attr: string) {
    for (const apt of this.apts) {
      if (apt.aptType === attr) {
        return apt.aptStepName;
      }
    }
    return "";
  }
}
