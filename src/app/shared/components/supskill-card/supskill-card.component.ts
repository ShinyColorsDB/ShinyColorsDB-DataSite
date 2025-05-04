import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardSupportSkill } from '../../interfaces/cardSupportSkill';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

@Component({
  selector: 'app-supskill-card',
  imports: [
    CommonModule,
  ],
  templateUrl: './supskill-card.component.html',
  styleUrls: ['./supskill-card.component.css']
})
export class SupskillCardComponent implements OnInit, OnChanges {

  @Input()
  supskills!: CardSupportSkill[];

  @Input()
  rarity!: string;

  activeArray: boolean[] = [];

  supportSkillBound = {};

  constructor(
    public scUtilService: UtilitiesService
  ) {
    this.supportSkillBound = scUtilService.supportSkillBound();
  }

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
