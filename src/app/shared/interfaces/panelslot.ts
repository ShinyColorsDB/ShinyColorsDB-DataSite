export interface PanelSlot {
  tableIndex: number;
  panelId: number;
  panelIcon: number;
  skillId: number;
  panelSlot: number;
  panelIsGold: number;
  panelReleaseEvolution: number;
  panelReleaseByEvent: number;
  panelReleaseDesc: string | null;
  skillTitle: string;
  skillDesc: string;
  skillType: string;
  skillEffects: any[];
  linkSkillId: number | null;
  linkSkillDesc: string | null;
  linkWith: string | null;
  plusSkillId: number | null;
  plusSkillDesc: string | null;
  plusSkillEffects: any[] | null;
}
