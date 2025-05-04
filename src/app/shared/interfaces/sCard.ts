import { Idol } from "./idol";
import { PanelSlot } from "./panelSlot";
import { CardSupportEvent } from "./cardSupportEvent"
import { CardProficiency } from "./cardProficiency";
import { CardSupportSkill } from "./cardSupportSkill";
import { CardSupportFightSkill } from "./cardSupportFightSkill";
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
