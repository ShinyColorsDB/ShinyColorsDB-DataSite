import { Card } from "./card";
import { Unit } from "./unit";

export interface Idol {
  idolId: number;
  idolName: string;
  hiragana: string;
  nickName: string;
  unitId: number;
  age: number;
  bloodType: string;
  birthday: string;
  starSign: string;
  height: number;
  weight: number;
  threeSize: string;
  usedHand: string;
  interest: string;
  specialSkill: string;
  birthPlace: string;
  preCv: string | null;
  cv: string | null;
  hirameki: string;
  color1: string;
  color2: string;
  cardLists: Card[];
  unit: Unit;
}
