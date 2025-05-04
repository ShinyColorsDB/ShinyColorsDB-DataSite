import { EventEmitter, Injectable } from '@angular/core';
import { Idol } from 'src/app/shared/interfaces/idol';
import { PCard } from 'src/app/shared/interfaces/pCard';
import { SCard } from 'src/app/shared/interfaces/sCard';

import { ShinyColorsUrlService } from '../shinycolors-url/shinycolors-url.service';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor(
    public scUrlService: ShinyColorsUrlService,
  ) { }

  activeIds = new EventEmitter<number[]>();
  storedIds: number[] = [];

  mobileTitle = new EventEmitter<string>();

  emitActiveIds(ids: number[]) {
    this.storedIds = ids;
    this.activeIds.emit(ids);
  }

  emitMobileTitle(title: string, stripe: boolean = false) {
    let display: string = title;
    if (stripe) {
      display = title.match(/(【.*】)/)![1];
    }
    this.mobileTitle.emit(display);
  }

  generateDefaultMeta(): { name: string; content: string }[] {
    return [
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://shinycolors.moe/'
      },
      {
        name: 'og:title',
        content: ' ~ 閃耀色彩資料庫 ~ '
      },
      {
        name: 'og:description',
        content: '歡迎來到閃耀色彩資料庫! 本網頁蒐集了遊戲 The Idolm@ster Shiny Colors 中的所有遊戲資料，包括出卡時間表、卡片情報、遊戲劇情等內容，希望對各位有所幫助\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, Shiny Colors, ShinyColors, シャニマス, 偶像大師閃耀色彩'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:url',
        content: 'https://shinycolors.moe/'
      },
      {
        name: 'twitter:title',
        content: ' ~ 閃耀色彩資料庫 ~ '
      },
      {
        name: 'twitter:description',
        content: '歡迎來到閃耀色彩資料庫! 本網頁蒐集了遊戲 The Idolm@ster Shiny Colors 中的所有遊戲資料，包括出卡時間表、卡片情報、遊戲劇情等內容，希望對各位有所幫助\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, ShinyColors, シャニマス, 偶像大師閃耀色彩'
      },
      {
        name: 'description',
        content: '歡迎來到閃耀色彩資料庫! 本網頁蒐集了遊戲 The Idolm@ster Shiny Colors 中的所有遊戲資料，包括出卡時間表、卡片情報、遊戲劇情等內容，希望對各位有所幫助\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, ShinyColors, シャニマス, 偶像大師閃耀色彩'
      }
    ];
  }

  generateIdolMeta(idolInfo: Idol): { name: string; content: string }[] {
    return [
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: idolInfo.idolName },
      {
        name: 'og:description',
        content: `姓名: ${idolInfo.idolName}\n生日: ${idolInfo.birthday}\n所屬: ${idolInfo.unit.unitName}`,
      },
      {
        name: 'og:image',
        content: this.scUrlService.getIdolIcon(idolInfo.idolId),
      },
      { name: 'theme-color', content: idolInfo.color1 },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: idolInfo.idolName },
      {
        name: 'twitter:description',
        content: `姓名: ${idolInfo.idolName}\n生日: ${idolInfo.birthday}\n所屬: ${idolInfo.unit.unitName}`,
      },
      {
        name: 'twitter:url',
        content: `https://shinycolors.moe/idolinfo?idolid=${idolInfo.idolId}`,
      },
      {
        name: 'twitter:image',
        content: this.scUrlService.getIdolIcon(idolInfo.idolId),
      },
      {
        name: 'description',
        content: `姓名: ${idolInfo.idolName}\n生日: ${idolInfo.birthday}\n所屬: ${idolInfo.unit.unitName}`,
      }
    ];
  }

  generateReverseLookupMeta(): { name: string; content: string }[] {
    return [
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://shinycolors.moe/r-lookup'
      },
      {
        name: 'og:title',
        content: ' ~ 技能篩選 ~ '
      },
      {
        name: 'og:description',
        content: '從支援技能等級反向篩選支援卡牌'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:url',
        content: 'https://shinycolors.moe/r-lookup'
      },
      {
        name: 'twitter:title',
        content: ' ~ 技能篩選 ~ '
      },
      {
        name: 'twitter:description',
        content: '從支援技能等級反向篩選支援卡牌'
      },
      {
        name: 'description',
        content: '從支援技能等級反向篩選支援卡牌'
      }
    ];
  }

  generateCardMeta(card: PCard | SCard): { name: string; content: string }[] {
    return [
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: card.cardName },
      {
        name: 'og:image',
        content: card.cardType.match("P_") ? this.scUrlService.getCardUrl(card.enzaId) : this.scUrlService.getSupportCardUrl(card.enzaId),
      },
      { name: 'theme-color', content: card.idol.color1 },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: card.cardName },
      {
        name: 'twitter:url',
        content: `https://shinycolors.moe/${card.cardType.match("P_") ? "pcardinfo" : "scardinfo"}?uuid=${card.cardUuid}`,
      },
      {
        name: 'twitter:image',
        content: card.cardType.match("P_") ? this.scUrlService.getCardUrl(card.enzaId) : this.scUrlService.getSupportCardUrl(card.enzaId),
      },
      {
        name: 'description',
        content: `卡名: ${card.cardName}\n 稀有度: ${card.cardType}\n 實裝: ${card.releaseDate}`
      }
    ];
  }

  isSrCard(theType: string): boolean {
    return theType.match(/_SR/) !== null;
  }

  isSsrCard(theType: string): boolean {
    return theType.match(/_SSR/) !== null || theType.match(/_UR/) !== null;
  }

  translateGetMethod(method: string): string {
    switch (method) {
      case 'Default':
        return '基礎卡牌';
      case 'IdolRoad':
        return '偶像之路';
      case 'GeneralGasha':
        return '一般卡池';
      case 'LimitedGasha':
        return '限定卡池';
      case 'Events':
        return '活動獎勵';
      case 'FesReward':
        return '天梯獎勵';
      case 'LiveReward':
        return 'Live獎勵';
      case 'TwilightCollection':
        return '暮光卡池';
      case 'PaidGasha':
        return '有償卡池';
      case 'MySongCollection':
        return 'MSC卡池';
      case 'Present':
        return '營運贈送';
      case 'CollaboGasha':
        return '合作卡池';
      case 'CollaboEvents':
        return '合作活動';
      case 'CollabTwilightCollection':
        return '合作暮光';
      case 'AnimeReward':
        return '動畫獎勵';
      case 'SituationDrama':
        return '情景劇卡池';
      case 'ParallelCollection':
        return '平行卡池';
      default:
        return method;
    }
  }

  translateIdeaNote(idea: string): string {
    switch (idea) {
      case 'vocal':
        return "ボーカル";
      case 'dance':
        return "ダンス";
      case 'visual':
        return "ビジュアル";
      case 'mental':
        return "メンタル";
      case 'skill_point':
        return "アピール";
      default:
        return "";
    }
  }

  convertHirameki(hirameki: string): string {
    switch (hirameki) {
      case 'Vo':
        return 'vocal';
      case 'Da':
        return 'dance';
      case 'Vi':
        return 'visual';
      case 'Me':
        return 'mental';
      default:
        return '';
    }
  }

  translateProficiency(proficiency: string): string {
    switch (proficiency) {
      case 'teamwork':
        return '團結力';
      case 'feel_stable':
        return '安定感';
      case 'expressive_power':
        return '表現力';
      case 'sing_ability':
        return '歌唱力';
      case 'concentration':
        return '集中力';
      default:
        return '';
    }
  }

  supportSkillBound() {
    return {
      "S_UR": [60, 65, 70, 75, 80],
      "S_SSR": [60, 65, 70, 75, 80],
      "S_SR": [50, 55, 60, 65, 70],
      "S_R": [40, 45, 50, 55, 60],
      "S_N": [5, 10],
    }
  }
}
