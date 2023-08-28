import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-query-result-modal',
  templateUrl: './query-result-modal.component.html',
  styleUrls: ['./query-result-modal.component.css']
})
export class QueryResultModalComponent implements OnInit {

  @ViewChild('content')
  resultModal!: NgbModal;

  @Input()
  queryResult!: Card[];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  open() {
    this.modalService.open(this.resultModal, {size: "xl"}).result.then(
      (result) => {
      },
      (reason) => {
      },
    );
  }
}
