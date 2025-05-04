import { Idol } from "./idol";
import { CardIdolEvent } from "./cardIdolEvent";
import { CardMemoryAppeal } from "./cardMemoryAppeal";
import { PanelSlot } from "./panelSlot";
import { CardProduceAptitude } from "./cardProduceAptitude";
import { Card } from "./card";
import { MemoryChargeSkill } from "./memoryChargeSkill";

export interface PCard extends Card {
  idol: Idol;
  cardIdolEvents: CardIdolEvent[];
  cardMemoryAppeals: CardMemoryAppeal[];
  cardPanels: PanelSlot[];
  cardProduceAptitude: CardProduceAptitude[];
  memoryChargeSkills: MemoryChargeSkill[];
}
