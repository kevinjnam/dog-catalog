import React from 'react';
import { Provider } from 'react-redux';
import { store } from './globals/store.js';
import { Browse } from './pages/Browse/Browse';
import './App.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <Browse />
    </Provider>
  );
};
