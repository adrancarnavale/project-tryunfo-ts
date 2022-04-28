import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userSlice, cardSlice } from '../reducers';

export const store = configureStore({
  reducer: {
    user: userSlice,
    card: cardSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
