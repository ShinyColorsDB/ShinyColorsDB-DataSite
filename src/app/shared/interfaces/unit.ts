import { Idol } from "./idol";

export interface Unit {
    unitId: number;
    unitName: string;
    unitHiragana: string;
    color1: string;
    color2: string;
    unitPv: string;
    idols: Idol[];
}