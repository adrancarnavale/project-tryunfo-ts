import { Store } from '@reduxjs/toolkit';
import { MemoryHistory } from 'history';

export interface IInitialState {
  initialState?: object;
  store?: Store;
  route?: string;
  history?: MemoryHistory;
}
