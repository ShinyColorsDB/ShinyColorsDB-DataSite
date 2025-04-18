import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { SupSkillList } from '../../interfaces/supskilllist';

@Component({
  selector: 'app-sub-skill-form',
  standalone: true,
  templateUrl: './sub-skill-form.component.html',
  styleUrls: ['./sub-skill-form.component.css']
})
export class SubSkillFormComponent implements OnInit {

  queryStr: [string, number] = ['', 0];

  @Input()
  skillList!: SupSkillList[];

  @ViewChild('skillNameSelect')
  skillNameSelect!: ElementRef<HTMLSelectElement>;

  @ViewChild('skillSubOption')
  skillSubOption!: ElementRef<HTMLSelectElement>;

  @ViewChild('skillLevelSelect')
  skillLevel!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  subOption(): void {
    if (this.skillNameSelect.nativeElement.selectedOptions[0].getAttribute("subOption") === '0') {
      this.skillSubOption.nativeElement.value = '';
      this.skillSubOption.nativeElement.setAttribute("disabled", '');
    }
    else {
      this.skillSubOption.nativeElement.removeAttribute("disabled");
    }
  }

  updateQueryStr() {
    if (this.skillNameSelect.nativeElement.value === 'すべて') {
      this.queryStr = ['', 0];
    }
    else {
      this.queryStr = [`${this.skillNameSelect.nativeElement.value}${this.skillSubOption.nativeElement.value}`, Number(this.skillLevel.nativeElement.value) || 0];
    }
  }
}
