import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card';
import { Idol } from 'src/app/shared/interfaces/idol';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  generateIdolMeta(idolInfo: Idol) {
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

  generateCardMeta(card: Card) { }

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
}
