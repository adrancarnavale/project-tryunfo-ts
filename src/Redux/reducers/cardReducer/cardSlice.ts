import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatApi } from '../../../services';
import {
  ICardReducerInitialState,
  ICardInformations,
  ICardFinalInformations,
} from './types';

const initialState: ICardReducerInitialState = {
  listOfCards: [],
  hasTrunfo: false,
  isLoading: false,
};

const addCardToList = createAsyncThunk(
  'card/addCardToList',
  async (cardInfos: ICardInformations) => {
    const cardImage = await fetchCatApi();

    const mountedCard = {
      ...cardInfos,
      cardImage,
    };

    return mountedCard;
  }
);

const checkForTrunfoPresence = (listOfCards: ICardFinalInformations[]) => {
  return listOfCards.some((card) => card.trunfo);
};

const removeCardFromList = (
  listOfCards: ICardFinalInformations[],
  id: string
) => {
  const mountedArray = listOfCards.filter((card) => card.id !== id);

  return mountedArray;
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    removeCard: (state, action) => {
      state.listOfCards = removeCardFromList(state.listOfCards, action.payload);

      const trunfoStatus = checkForTrunfoPresence(state.listOfCards);

      state.hasTrunfo = trunfoStatus;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCardToList.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(addCardToList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listOfCards.push(action.payload);

        const trunfoStatus = checkForTrunfoPresence(state.listOfCards);

        state.hasTrunfo = trunfoStatus;
      });
  },
});

export const { removeCard } = cardSlice.actions;
export default cardSlice.reducer;
export { addCardToList };
