import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { catchError, of } from 'rxjs';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { SupSkillList } from '../../interfaces/supskilllist';
import { Unit } from '../../interfaces/unit';
import { QueryResult } from '../../interfaces/queryresult';

import { SubSkillFormComponent } from '../../components/sub-skill-form/sub-skill-form.component';
import { SubIdolFormComponent } from '../../components/sub-idol-form/sub-idol-form.component';
import { QueryResultModalComponent } from '../../components/query-result-modal/query-result-modal.component';

@Component({
  selector: 'app-r-lookup',
  templateUrl: './r-lookup.component.html',
  styleUrls: ['./r-lookup.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100 container-fluid p-0',
  },
})
export class RLookupComponent implements OnInit {

  @ViewChildren("subSkillForm")
  subSkillForms!: QueryList<SubSkillFormComponent>;

  @ViewChildren("subIdolForm")
  subIdolForms!: QueryList<SubIdolFormComponent>;

  @ViewChild("resultModal")
  resultModal!: QueryResultModalComponent;

  skillList!: SupSkillList[];
  units: Unit[] = [];

  querySupSkills: [string, number][] = [];
  queryIdols: number[] = [];

  queryResult: QueryResult[] = [];

  constructor(/*private fb: FormBuilder,*/
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle("~ 技能篩選 ~")
    this.utilsService.emitMobileTitle('技能篩選');
    this.meta.addTags(this.utilsService.generateReverseLookupMeta());
    this.scApiService.getSupportSkillList()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) { return; }
        this.skillList = data;
      });
    this.scApiService.getUnitList().subscribe((data) => {
      console.log(data);
      this.units = data;
    });
  }

  ngOnInit(): void {}

  getColspan(index: number, memberCount: number): number {
    return index == memberCount - 1 ? 5 - memberCount + 1 : 1;
  }

  submitQuery(): void {
    this.querySupSkills = [];
    this.queryIdols = [];
    for (let i of this.subSkillForms) {
      if (i.queryStr[0]) {
        this.querySupSkills.push(i.queryStr);
      }
    }

    for (let i of this.subIdolForms) {
      if (i.selectedIdols.length) {
        this.queryIdols = [...this.queryIdols, ...i.selectedIdols];
      }
    }

    this.scApiService.querySupportSkills({
      queryIdols: this.queryIdols,
      querySkills: this.querySupSkills,
    }).subscribe((data) => {
      this.queryResult = data;
      this.resultModal.open();
    });
  }
}
