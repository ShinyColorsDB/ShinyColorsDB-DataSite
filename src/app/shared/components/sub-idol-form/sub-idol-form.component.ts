import { Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { Idol } from '../../interfaces/idol';
import { Unit } from '../../interfaces/unit';

@Component({
  selector: 'app-sub-idol-form',
  templateUrl: './sub-idol-form.component.html',
  styleUrls: ['./sub-idol-form.component.css'],
  host: {
    class: "col-xl-6 col-lg-12 p-0"
  }
})
export class SubIdolFormComponent implements OnInit {

  @Input()
  unit!: Unit;

  @ViewChildren('idolCheckbox')
  idolCheckbox!: ElementRef<HTMLInputElement>[];

  selectedIdols: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleAllIdols(event: Event) {
    for (let i of this.idolCheckbox) {
      i.nativeElement.checked = (event.target as HTMLInputElement).checked;
    }
  }

  updateSelectedIdols() {
    this.selectedIdols = [];
    for (let i of this.idolCheckbox) {
      if (i.nativeElement.checked) {
        this.selectedIdols.push(parseInt(i.nativeElement.getAttribute('value')!));
      }
    }
  }

}
