export interface ICardReducerInitialState {
  listOfCards: ICardFinalInformations[];
  hasTrunfo: boolean;
  isLoading: boolean;
}

export interface ICardInformations {
  name: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  rarity: string;
  trunfo: boolean;
  id: string;
}

export interface ICardFinalInformations {
  name: string;
  attribute1: string;
  attribute2: string;
  attribute3: string;
  rarity: string;
  trunfo: boolean;
  cardImage: string;
  id: string;
}
