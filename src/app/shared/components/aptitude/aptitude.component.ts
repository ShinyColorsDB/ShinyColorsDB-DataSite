import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CardProduceAptitude } from '../../interfaces/cardProduceAptitude';

@Component({
  selector: 'app-aptitude',
  standalone: true,
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
