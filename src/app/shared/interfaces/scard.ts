import { Idol } from "./idol";
import { PanelSlot } from "./panelslot";
import { CardSupportEvent } from "./cardsupportevent"
import { CardProficiency } from "./cardproficiency";
import { CardSupportSkill } from "./cardsupportskill";
import { CardSupportFightSkill } from "./cardsupportfightskill";
import { Card } from "./card";

export interface SCard extends Card {
  idol: Idol;
  ideaMark: string;
  cardSupportEvents: CardSupportEvent[];
  cardSupportSkills: CardSupportSkill[];
  cardProficiencies: CardProficiency[];
  cardPanels: PanelSlot[];
  supportFightSkills: CardSupportFightSkill;
}
