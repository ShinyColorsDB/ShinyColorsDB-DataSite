export interface Album {
  age: string
  ageType: string
  albumCommunicationTitles: AlbumCommunicationTitle[]
  arm: string
  birthDay: string
  bloodType: string
  bust: number
  characterVoice: string
  characters: Character[]
  communications: Communication[]
  continuousPlaybackLists: ContinuousPlaybackList[]
  firstName: string
  hash: string
  height: number
  hip: number
  hobby: string
  id: string
  idolCostumes: IdolCostume[]
  kind: string
  name: string
  nameKana: string
  place: string
  produceIdols: ProduceIdol[]
  specialty: string
  starSign: string
  supportIdols: SupportIdol[]
  totalCommunicationsCount: number
  totalIdolCostumesCount: number
  totalProduceIdolsCount: number
  totalSupportIdolsCount: number
  totalVoicesCount: number
  unit: Unit
  unitId: string
  userExchangeItem: UserExchangeItem
  voices: Voice[]
  waist: number
  weight: number
}

export interface AlbumCommunicationTitle {
  albumType: string
  id: string
  title: string
}

export interface Character {
  firstName: string
  id: string
  kind: string
}

export interface Communication {
  albumType: string
  canReleaseWithItem: boolean
  communicationCategory: string
  communicationId: string
  failureCommunicationId: string
  isNew: boolean
  isReleased: boolean
  questionComment: string
  releasedConditionComment: string
  successCommunicationId: string
  title: string
}

export interface ContinuousPlaybackList {
  events: Event[]
  produceType: string
}

export interface Event {
  eventId: string
  order: number
}

export interface IdolCostume {
  characterHash: string
  characterId: string
  comment: string
  groupId: string
  hash: string
  id: string
  idolId: string
  isAvailable: boolean
  isReleased: boolean
  isSelected: boolean
  isSkin: boolean
  kind: string
  name: string
  openAt: any
  order: number
  rarity: number
  releasedConditionComment: string
  selectCostumeType: string
  skinId: string
  unitId: string
}

export interface ProduceIdol {
  character: Character2
  characterId: string
  comment?: Comment
  copyrightInfo: string
  costumeName: string
  dance: number
  hasIdol: boolean
  hasIdolRoad: boolean
  hash: string
  id: string
  idolArrivalTypeId: string
  idolConvertRewardGroupId: string
  idolMemoryAppealGroupId: string
  isFullMvEnabled: boolean
  isLightMvEnabled: boolean
  limitDance: number
  limitMental: number
  limitVisual: number
  limitVocal: number
  mental: number
  mvConcertBgmId: string
  name: string
  openAt: number
  rarity: number
  sortId: string
  userIdolId: string
  visual: number
  vocal: number
}

export interface Character2 {
  hash: string
  id: string
}

export interface Comment {
  comment: string
}

export interface SupportIdol {
  characterId: string
  comment: string
  concertFightSkillBaseId: string
  copyrightInfo: string
  defaultDanceBonus: number
  defaultMentalBonus: number
  defaultSkillPointBonus: number
  defaultVisualBonus: number
  defaultVocalBonus: number
  hasSupportIdol: boolean
  hash: string
  id: string
  ideaMark: string
  idolArrivalTypeId: string
  idolConvertRewardGroupId: string
  maxDanceBonus: number
  maxMentalBonus: number
  maxSkillPointBonus: number
  maxVisualBonus: number
  maxVocalBonus: number
  middleDanceBonus: number
  middleMentalBonus: number
  middleSkillPointBonus: number
  middleVisualBonus: number
  middleVocalBonus: number
  mvSupportIdolSeriesNumberId: string
  name: string
  openAt: number
  rarity: number
  sortId: string
  userSupportIdolId: string
}

export interface Unit {
  id: string
  kind: string
  memberCount: number
  name: string
}

export interface UserExchangeItem {
  exchangeItem: ExchangeItem
  exchangeItemId: string
  id: string
  num: number
}

export interface ExchangeItem {
  category: string
  closeAt: number
  comment: string
  id: string
  image: string
  isClosed: boolean
  limitNum: number
  name: string
  openAt: number
}

export interface Voice {
  animation1: string
  animation2: string
  animation3: string
  animation3loop: string
  animation4: string
  availableExchangeSince: number
  canChangeIsEnabled: boolean
  canReleaseWithItem: boolean
  characterTrustLevelComment?: CharacterTrustLevelComment
  isEnabled: boolean
  isReleased: boolean
  lip: string
  releasedConditionComment: string
  title: string
  voice: string
  voiceId: string
  voiceType: string
}

export interface CharacterTrustLevelComment {
  animation1: string
  animation2: string
  animation3: string
  animation3Loop: string
  animation4: string
  canUseItem: boolean
  characterId: string
  comment: string
  id: string
  lip: string
  openAt: number
  releasedConditionComment: string
  trustLevel: number
  voice: string
  voiceName: string
}
