import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardMemoryAppeal } from '../../interfaces/cardMemoryAppeal';
import { MemoryChargeSkill } from '../../interfaces/memoryChargeSkill';

@Component({
  selector: 'app-memory-table',
  standalone: true,
  templateUrl: './memory-table.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./memory-table.component.css']
})
export class MemoryTableComponent implements OnInit {

  @Input()
  memoryList!: CardMemoryAppeal[];

  @Input()
  chargeSkills!: MemoryChargeSkill[];

  constructor() { }

  ngOnInit(): void {
  }

  addLineBreak(content: string | null): string {
    return content ? content.replace(/\//g, '/\n') : "";
  }
}
