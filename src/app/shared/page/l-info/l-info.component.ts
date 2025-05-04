import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { CommonModule } from '@angular/common';
import { LiveInfo } from '../../interfaces/liveInfo';
import { Unit } from '../../interfaces/unit';

@Component({
  selector: 'app-l-info',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './l-info.component.html',
  styleUrl: './l-info.component.css',
  host: {
    class: 'overflow-auto container-fluid d-flex justify-content-center',
  }
})
export class LInfoComponent {

  liveId!: string;

  liveInfo!: LiveInfo;
  unitInfo!: Unit[];

  constructor(
    private scUtilServive: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Live 情報');
    scUtilServive.emitMobileTitle('Live 情報');
  }

  getPresentField(idolId: number) {
    switch (idolId) {
      case 1:
        return 'present_idol01' as keyof typeof this.liveInfo;
      case 2:
        return 'present_idol02' as keyof typeof this.liveInfo;
      case 3:
        return 'present_idol03' as keyof typeof this.liveInfo;
      case 4:
        return 'present_idol04' as keyof typeof this.liveInfo;
      case 5:
        return 'present_idol05' as keyof typeof this.liveInfo;
      case 6:
        return 'present_idol06' as keyof typeof this.liveInfo;
      case 7:
        return 'present_idol07' as keyof typeof this.liveInfo;
      case 8:
        return 'present_idol08' as keyof typeof this.liveInfo;
      case 9:
        return 'present_idol09' as keyof typeof this.liveInfo;
      case 10:
        return 'present_idol10' as keyof typeof this.liveInfo;
      case 11:
        return 'present_idol11' as keyof typeof this.liveInfo;
      case 12:
        return 'present_idol12' as keyof typeof this.liveInfo;
      case 13:
        return 'present_idol13' as keyof typeof this.liveInfo;
      case 14:
        return 'present_idol14' as keyof typeof this.liveInfo;
      case 15:
        return 'present_idol15' as keyof typeof this.liveInfo;
      case 16:
        return 'present_idol16' as keyof typeof this.liveInfo;
      case 17:
        return 'present_idol17' as keyof typeof this.liveInfo;
      case 18:
        return 'present_idol18' as keyof typeof this.liveInfo;
      case 19:
        return 'present_idol19' as keyof typeof this.liveInfo;
      case 20:
        return 'present_idol20' as keyof typeof this.liveInfo;
      case 21:
        return 'present_idol21' as keyof typeof this.liveInfo;
      case 22:
        return 'present_idol22' as keyof typeof this.liveInfo;
      case 23:
        return 'present_idol23' as keyof typeof this.liveInfo;
      case 24:
        return 'present_idol24' as keyof typeof this.liveInfo;
      case 25:
        return 'present_idol25' as keyof typeof this.liveInfo;
      case 26:
        return 'present_idol26' as keyof typeof this.liveInfo;
      case 27:
        return 'present_idol27' as keyof typeof this.liveInfo;
      case 28:
        return 'present_idol28' as keyof typeof this.liveInfo;
      default:
        return '' as keyof typeof this.liveInfo;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.liveId = params['liveId'];

      this.scApiService.getLiveInfo(this.liveId).subscribe((data) => {
        this.liveInfo = data;
      });
      this.scApiService.getUnitList().subscribe((data) => {
        this.unitInfo = data;
      });
    });
  }

  displayUnit(unit: Unit, day: number = 3): boolean {
    let flag = false;
    unit.idols.forEach(e => {
      const present = this.liveInfo[this.getPresentField(e.idolId)];
      if (
        present &&
        (present === day || present === 3)
      ) {
        flag = true;
      }
    });
    return flag;
  }

  displayIdol(idolId: number, day: number = 3): boolean {
    return this.liveInfo[this.getPresentField(idolId)] === day || this.liveInfo[this.getPresentField(idolId)] === 3;
  }

  markIdol(idolId: number, day: number): boolean {
    return this.liveInfo[this.getPresentField(idolId)] === day;
  }
}
