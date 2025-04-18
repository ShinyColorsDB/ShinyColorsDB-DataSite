import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryResult } from '../../interfaces/queryresult';

import { environment } from 'src/environments/environment';
import { ShinyColorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';
import { RouterModule } from '@angular/router';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';


@Component({
  selector: 'app-query-result-modal',
  imports: [
    RouterModule
  ],
  templateUrl: './query-result-modal.component.html',
  styleUrls: ['./query-result-modal.component.css']
})
export class QueryResultModalComponent implements OnInit {

  @ViewChild('content')
  resultModal!: NgbModal;

  @Input()
  queryResult: QueryResult[] = [];

  regExp: RegExp = /【(.*)】(.*)/;

  supportSkillBound = {};

  constructor(
    private modalService: NgbModal,
    public scUrlService: ShinyColorsUrlService,
    public scUtilService: UtilitiesService
  ) {
    this.supportSkillBound = scUtilService.supportSkillBound();
  }

  ngOnInit(): void { }

  open() {
    this.modalService.open(this.resultModal, { size: "xl" }).result.then(
      (result) => {
      },
      (reason) => {
      },
    );
  }

  getMinimumLevel(i: QueryResult): number {
    if (!i?.A_GainedAt) {
      return 0;
    }
    else {
      return Math.max(i?.A_GainedAt || 0, i?.B_GainedAt || 0, i?.C_GainedAt || 0, i?.D_GainedAt || 0)
    }
  }

  getEvolutionStage(q: QueryResult): number {
    const boundOfCard = this.supportSkillBound[q.E_CardType as keyof typeof this.supportSkillBound];
    if (this.getMinimumLevel(q)) {

    }
    return 0;
  }
}
