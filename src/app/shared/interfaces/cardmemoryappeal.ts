import { ExtraEffect } from "./extraEffect";

export interface CardMemoryAppeal {
  memoryIndex: number;
  memoryId: number;
  memoryTitle: string;
  memoryDesc: string;
  memoryEffects: any[];
  extraEffect: ExtraEffect | null;
}
