import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { CommonModule } from '@angular/common';
import { LiveInfo } from '../../interfaces/liveInfo';
import { Unit } from '../../interfaces/unit';
import { Idol } from '../../interfaces/idol';
import { liveSetList } from '../../interfaces/liveSetList';

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
  idolInfo!: Idol[];

  dayTab: number = 0;

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
        return 'idol01' as keyof typeof this.liveInfo;
      case 2:
        return 'idol02' as keyof typeof this.liveInfo;
      case 3:
        return 'idol03' as keyof typeof this.liveInfo;
      case 4:
        return 'idol04' as keyof typeof this.liveInfo;
      case 5:
        return 'idol05' as keyof typeof this.liveInfo;
      case 6:
        return 'idol06' as keyof typeof this.liveInfo;
      case 7:
        return 'idol07' as keyof typeof this.liveInfo;
      case 8:
        return 'idol08' as keyof typeof this.liveInfo;
      case 9:
        return 'idol09' as keyof typeof this.liveInfo;
      case 10:
        return 'idol10' as keyof typeof this.liveInfo;
      case 11:
        return 'idol11' as keyof typeof this.liveInfo;
      case 12:
        return 'idol12' as keyof typeof this.liveInfo;
      case 13:
        return 'idol13' as keyof typeof this.liveInfo;
      case 14:
        return 'idol14' as keyof typeof this.liveInfo;
      case 15:
        return 'idol15' as keyof typeof this.liveInfo;
      case 16:
        return 'idol16' as keyof typeof this.liveInfo;
      case 17:
        return 'idol17' as keyof typeof this.liveInfo;
      case 18:
        return 'idol18' as keyof typeof this.liveInfo;
      case 19:
        return 'idol19' as keyof typeof this.liveInfo;
      case 20:
        return 'idol20' as keyof typeof this.liveInfo;
      case 21:
        return 'idol21' as keyof typeof this.liveInfo;
      case 22:
        return 'idol22' as keyof typeof this.liveInfo;
      case 23:
        return 'idol23' as keyof typeof this.liveInfo;
      case 24:
        return 'idol24' as keyof typeof this.liveInfo;
      case 25:
        return 'idol25' as keyof typeof this.liveInfo;
      case 26:
        return 'idol26' as keyof typeof this.liveInfo;
      case 27:
        return 'idol27' as keyof typeof this.liveInfo;
      case 28:
        return 'idol28' as keyof typeof this.liveInfo;
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
      this.scApiService.getIdolList().subscribe((data) => {
        this.idolInfo = data;
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

  displaySinger(entry: liveSetList) {
    let singer = "";

    this.idolInfo.forEach((i) => {
      const idolKey = `idol${(i.idolId).toString().padStart(2, '0')}` as keyof typeof entry;
      if (entry[idolKey]) {
        singer += this.idolInfo[i.idolId - 1]?.cv?.replace(' ', '') + ', ';
      }
    });

    return singer.slice(0, -2);
  }
}
