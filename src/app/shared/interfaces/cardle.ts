import { Card } from "./card";
import { Cardlechunk } from "./cardlechunk";

export interface Cardle {
  cardleIndex: number;
  cardleDate: string;
  enzaId: string;
  cardleType: number;
  enza: Card;
  cardleChunks: Cardlechunk[];
}