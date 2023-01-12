import { Idol } from "./idol";
import { PanelSlot } from "./panelslot";
import { CardSupportEvent } from "./cardsupportevent"
import { CardProficiency } from "./cardproficiency";
import { CardSupportSkill } from "./cardsupportskill";
import { cardSupportFightSkill } from "./cardSupportFightSkill";

export interface SCard {
    cardIndex: number;
    cardName: string;
    cardUuid: string;
    bigPic1: string;
    bigPic2: string;
    smlPic: string;
    cardType: string;
    getMethod: string;
    releaseDate: string;
    idol: Idol;
    ideaMark: string;
    cardSupportEvents: CardSupportEvent[];
    cardSupportSkills: CardSupportSkill[];
    cardProficiencies: CardProficiency[];
    cardPanels: PanelSlot[];
    cardSupportFightSkills: cardSupportFightSkill;
}