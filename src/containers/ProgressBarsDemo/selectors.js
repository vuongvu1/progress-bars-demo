// import { createSelector } from 'reselect';

export const barListSelector = (state) => state.progressBar.bars.list;
export const buttonListSelector = (state) => state.progressBar.buttons.list;

export const allBarsSelector = (state) => state.progressBar.bars.all;
export const allButtonSelector = (state) => state.progressBar.buttons.all;

export const limitValueSelector = (state) => state.progressBar.limit;
export const loadingSelector = (state) => state.progressBar.isLoading;
