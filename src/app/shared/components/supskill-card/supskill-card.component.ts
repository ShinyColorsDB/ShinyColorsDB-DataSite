import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardSupportSkill } from '../../interfaces/cardsupportskill';

@Component({
  selector: 'app-supskill-card',
  templateUrl: './supskill-card.component.html',
  styleUrls: ['./supskill-card.component.css']
})
export class SupskillCardComponent implements OnInit, OnChanges {

  @Input()
  supskills!: CardSupportSkill[];

  @Input()
  rarity!: string;

  activeArray: boolean[] = [];

  supportSkillBound = {
    "S_SSR": [60, 65, 70, 75, 80],
    "S_SR": [50, 55, 60, 65, 70],
    "S_R": [40, 45, 50, 55, 60],
    "S_N": [5, 10],
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.activeArray = new Array(this.getBoundFromRarity().length);
    this.activeArray.fill(false);
    this.activeArray[this.activeArray.length - 1] = true;
  }

  setActiveTab(index: number): void {
    this.activeArray.forEach((value, i) => {
      this.activeArray[i] = (i == index);
    });
  }

  getBoundFromRarity(): number[] {
    return this.supportSkillBound[this.rarity as keyof typeof this.supportSkillBound];
  }

  getSkillWithinBound(index: number): CardSupportSkill[] {
    let m = new Map<string, CardSupportSkill>();
    this.supskills.forEach(skill => {
      if (skill.gainedAt <= this.getBoundFromRarity()[index]) {
        m.set(skill.skillName, skill);
      }
    });
    return Array.from(m.values());
  }
}
