import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-criteria',
  standalone: true,
  templateUrl: './common-criteria.component.html',
  styleUrls: ['./common-criteria.component.css'],
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
