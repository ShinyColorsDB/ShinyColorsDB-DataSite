import { Idol } from "./idol";
import { CardIdolEvent } from "./cardidolevent";
import { CardMemoryAppeal } from "./cardmemoryappeal";
import { PanelSlot } from "./panelslot";
import { CardProduceAptitude } from "./cardProduceAptitude";

export interface PCard {
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
    cardIdolEvents: CardIdolEvent[];
    cardMemoryAppeals: CardMemoryAppeal[];
    cardPanels: PanelSlot[];
    cardProduceAptitudes: CardProduceAptitude[];
    enzaId: number;
}