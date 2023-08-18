import { Component, Input, OnInit } from '@angular/core';
import { CardMemoryAppeal } from '../../interfaces/cardmemoryappeal';

@Component({
  selector: 'app-memory-table',
  templateUrl: './memory-table.component.html',
  styleUrls: ['./memory-table.component.css']
})
export class MemoryTableComponent implements OnInit {

  @Input()
  memoryList!: CardMemoryAppeal[];

  constructor() { }

  ngOnInit(): void {
  }

  addLineBreak(content: string | null): string {
    return content ? content.replace(/\//g, '/\n') : "";
  }
}
