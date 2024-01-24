import { EventEmitter, Injectable } from '@angular/core';
import { Idol } from 'src/app/shared/interfaces/idol';
import { PCard } from 'src/app/shared/interfaces/pcard';
import { SCard } from 'src/app/shared/interfaces/scard';

import { ShinycolorsUrlService } from '../shinycolors-url/shinycolors-url.service';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor(
    public scUrlService: ShinycolorsUrlService,
  ) { }

  activeIds = new EventEmitter<number[]>();

  mobileTitle = new EventEmitter<string>();

  emitActiveIds(ids: number[]) {
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
        content: ' ~ ShinyColorsDB ~ '
      },
      {
        name: 'og:description',
        content: 'Welcome to ShinyColorsDB! This site provides in-game data of The Idolm@ster Shiny Colors, including release history, card info, game events. Hope this site proves helpful to you all.\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, ShinyColors, シャニマス, 偶像大師閃耀色彩'
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
        content: ' ~ ShinyColorsDB ~ '
      },
      {
        name: 'twitter:description',
        content: 'Welcome to ShinyColorsDB! This site provides in-game data of The Idolm@ster Shiny Colors, including release history, card info, game events. Hope this site proves helpful to you all.\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, ShinyColors, シャニマス, 偶像大師閃耀色彩'
      },
      {
        name: 'description',
        content: 'Welcome to ShinyColorsDB! This site provides in-game data of The Idolm@ster Shiny Colors, including release history, card info, game events. Hope this site proves helpful to you all.\nThe IDOLM@STER Shiny Colors, アイドルマスター シャイニーカラーズ, ShinyColorsDB, ShinyColors, シャニマス, 偶像大師閃耀色彩'
      }
    ];
  }

  generateIdolMeta(idolInfo: Idol): { name: string; content: string }[] {
    return [
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: idolInfo.idolName },
      {
        name: 'og:description',
        content: `Name: ${idolInfo.idolName}\nBirthday: ${idolInfo.birthday}\nUnit: ${idolInfo.unit.unitName}`,
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
        content: `Name: ${idolInfo.idolName}\nBirthday: ${idolInfo.birthday}\nUnit: ${idolInfo.unit.unitName}`,
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
        content: `Name: ${idolInfo.idolName}\nBirthday: ${idolInfo.birthday}\nUnit: ${idolInfo.unit.unitName}`,
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
        content: ' ~ Reverse Lookup ~ '
      },
      {
        name: 'og:description',
        content: 'Reverse lookup from support skill'
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
        content: ' ~ Reverse Lookup ~ '
      },
      {
        name: 'twitter:description',
        content: 'Reverse lookup from support skill'
      },
      {
        name: 'description',
        content: 'Reverse lookup from support skill'
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
        content: `Card: ${card.cardName}\n Rarity: ${card.cardType}\n Release: ${card.releaseDate}`
      }
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
        return 'IdolRoad';
      case 'GeneralGasha':
        return 'Permanent';
      case 'LimitedGasha':
        return 'Limited';
      case 'Events':
        return 'Event Reward';
      case 'Default':
        return 'Default';
      case 'FesReward':
        return 'Fescoin Reward';
      case 'LiveReward':
        return 'Live Concert Reward';
      case 'TwilightCollection':
        return 'Twilight Collection';
      case 'PayedGasha':
        return 'Payed';
      case 'MySongCollection':
        return 'My Song Collection';
      case 'Present':
        return 'Present';
      case 'Collabo':
        return 'Collaboration';
      case 'CollaboEvents':
        return 'Collab Event';
      case 'AnimeReward':
        return 'Anime Exchange';
      case 'SituationDrama':
        return 'Situation Drama';
      default:
        return '';
    }
  }

  translateIdeaNote(idea: string): string {
    switch (idea) {
      case 'vocal':
        return "Vocal";
      case 'dance':
        return "Dance";
      case 'visual':
        return "Visual";
      case 'mental':
        return "Mental";
      case 'skill_point':
        return "Appeal";
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
        return 'Teamwork';
      case 'feel_stable':
        return 'feel_stable';
      case 'expressive_power':
        return 'Expressive Power';
      case 'sing_ability':
        return 'Sing Ability';
      case 'concentration':
        return 'Concentration';
      default:
        return '';
    }
  }
}
