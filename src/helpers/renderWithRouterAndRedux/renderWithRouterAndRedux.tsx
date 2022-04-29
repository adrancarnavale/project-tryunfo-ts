import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { cardSlice, userSlice } from '../../Redux/reducers';
import { IInitialState } from './types';
import { render } from '@testing-library/react';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const renderWithRouterAndRedux = (
  component: React.ReactNode,
  {
    initialState = {},
    store = configureStore({
      reducer: {
        user: userSlice,
        card: cardSlice,
      },
      preloadedState: initialState,
    }),

    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: IInitialState = {}
) => ({
  ...render(
    <Router history={history}>
      <Provider store={store}>{component}</Provider>
    </Router>
  ),
  history,
  store,
});

export default renderWithRouterAndRedux;
