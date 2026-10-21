import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-common-criteria',
  standalone: true,
  templateUrl: './common-criteria.component.html',
  styleUrls: ['./common-criteria.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'row'
  }
})
export class CommonCriteriaComponent implements OnInit {
  @Input()
  releaseDate: string = '';

  @Input()
  getMethod: string = '';

  @Input()
  rarity: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
