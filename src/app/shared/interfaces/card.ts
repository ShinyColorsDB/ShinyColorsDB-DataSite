import { CardStatus } from "./cardStatus";

export interface Card {
  cardIndex: number;
  idolId: number;
  enzaId: number;
  cardName: string;
  cardUuid: string;
  bigPic1: string;
  bigPic2: string | null;
  smlPic: string;
  cardType: string;
  getMethod: string;
  releaseDate: string;
  cardStatus: CardStatus;
  panelSPOffset: number;
}
