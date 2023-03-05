import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardMemoryAppeal } from '../../interfaces/cardmemoryappeal';

@Component({
  selector: 'app-memory-table',
  templateUrl: './memory-table.component.html',
  styleUrls: ['./memory-table.component.css']
})
export class MemoryTableComponent implements OnInit, OnChanges {

  @Input()
  memoryList!: CardMemoryAppeal[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  addLineBreak(content: string): string {
    return content.replace(/\//g, '/\n');
  }
}
