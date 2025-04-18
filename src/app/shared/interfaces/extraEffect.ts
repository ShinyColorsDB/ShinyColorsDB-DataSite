export interface ExtraEffect {
  extraEffectDesc: string;
  extraEffectId: string;
  extraEffectMember: string;
  extraEffectType: "link" | "plus" | "change"
  extraSkillEffect: any[];
  extraSkillIndex: number;
}
