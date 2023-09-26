import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShinycolorsUrlService {

  constructor() { }

  getUnitIconUri(unitId: number): string {
    return `${environment.cloudFlareUrl}images/content/unit/icon/${unitId.toString().padStart(3, '0')}.png`;
  }

  getIdolSmlIcon(idolId: number): string {
    return `${environment.cloudFlareUrl}images/content/characters/icon_circle/${idolId.toString().padStart(3, '0')}.png`;
  }

  getIdolLrgIcon(idolId: number): string {
    return `${environment.cloudFlareUrl}images/content/characters/icon_circle_l/${idolId.toString().padStart(3, '0')}.png`;
  }

  getCardUrl(cardId: number): string {
    return `${environment.cloudFlareUrl}images/content/idols/card/${cardId}.jpg`;
  }

  getFesCardUrl(cardId: number): string {
    return `${environment.cloudFlareUrl}images/content/idols/fes_card/${cardId}.jpg`;
  }

  getSupportCardUrl(cardId: number): string {
    return `${environment.cloudFlareUrl}images/content/support_idols/card/${cardId}.jpg`;
  }

  getCardMovieUrl(cardId: number): string {
    return `${environment.cloudFlareUrl}movies/idols/card/${cardId}.mp4`;
  }

  getCardCostumeMovieUrl(cardId: number): string {
    return `${environment.cloudFlareUrl}movies/idols/card_costume/${cardId}.mp4`;
  }

  getPCardIcon(cardId: number): string {
    return `${environment.cloudFlareUrl}images/content/idols/icon/${cardId}.png`;
  }

  getSCardIcon(cardId: number): string {
    return `${environment.cloudFlareUrl}images/content/support_idols/icon/${cardId}.png`;
  }

  getSkillIcon(skillId: number): string {
    return `${environment.cloudFlareUrl}others/skillIcon/${skillId}.png`;
  }

  getLinkUI(type: string): string {
    return `${environment.cloudFlareUrl}others/linkUI/${type}_skill_button.png`;
  }

  getIdolIcon(idolId: number): string {
    return `${environment.cloudFlareUrl}others/idolIcon/${idolId.toString().padStart(3, '0')}.jpg`;
  }

  getIdeaMark(attr: string): string {
    return `${environment.cloudFlareUrl}others/idea_mark/icon_idea_mark_${attr}_lv_1.png`;
  }

  getInspiration(attr: string): string {
    return `${environment.cloudFlareUrl}others/inspiration/produce_inspiration_m_${attr}.png`;
  }

  getProficiency(attr: string): string {
    return `${environment.cloudFlareUrl}others/proficiency/icon_proficiency_${attr}.png`;
  }

  getIdolLinkIcon(idolId: number): string {
    return `${environment.cloudFlareUrl}images/content/characters/icon_link/${idolId.toString().padStart(3, '0')}.png`;
  }
}
