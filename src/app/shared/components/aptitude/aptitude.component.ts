import { Component, Input, OnInit } from '@angular/core';

import { CardProduceAptitude } from '../../interfaces/cardProduceAptitude';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
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
