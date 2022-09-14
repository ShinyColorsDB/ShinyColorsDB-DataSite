import { EventEmitter, Injectable } from '@angular/core';
import { Idol } from 'src/app/shared/interfaces/idol';
import { PCard } from 'src/app/shared/interfaces/pcard';
import { SCard } from 'src/app/shared/interfaces/scard';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() { }

  activeIds = new EventEmitter<number[]>();

  emitActiveIds(ids: number[]) {
    this.activeIds.emit(ids);
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
        content: `https://static.shinycolors.moe/pictures/icon/${idolInfo.idolId
          .toString()
          .padStart(2, '0')}.jpg`,
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
        content: `https://static.shinycolors.moe/pictures/icon/${idolInfo.idolId
          .toString()
          .padStart(2, '0')}.jpg`,
      },
    ];
  }

  generateCardMeta(card: PCard | SCard): { name: string; content: string }[] {
    return [
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: card.cardName },
      {
        name: 'og:image',
        content: `https://static.shinycolors.moe/pictures/bigPic/${card.bigPic1}.jpg`,
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
        content: `https://static.shinycolors.moe/pictures/bigPic/${card.bigPic1}.jpg`,
      },
    ];
  }

  isSrCard(theType: string): boolean {
    return theType.match(/_SR/) !== null;
  }

  isSsrCard(theType: string): boolean {
    return theType.match(/_SSR/) !== null;
  }

  translateGetMethod(method: string): string {
    switch (method) {
      case 'IdolRoad':
        return '偶像之路';
      case 'GeneralGasha':
        return '一般卡池';
      case 'LimitedGasha':
        return '限定卡池';
      case 'Events':
        return '活動獎勵';
      case 'Default':
        return '基礎卡牌';
      case 'FesReward':
        return '天梯獎勵';
      case 'LiveReward':
        return 'Live獎勵';
      case 'TwilightCollect':
        return '暮光卡池';
      case 'PayedGasha':
        return '有償卡池';
      default:
        return '';
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
}
