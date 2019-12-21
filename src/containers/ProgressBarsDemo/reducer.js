
import { actionTypes } from './constants';

export const initialState = {
  isLoading: false,
  bars: [],
  buttons: [],
  limit: 0,
};

const progressBarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BARS_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_BARS_DATA_SUCCESS: {
      const { bars, buttons, limit } = action.payload;

      return {
        ...state,
        isLoading: false,
        bars,
        buttons,
        limit,
      };
    }

    case actionTypes.FETCH_BARS_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default progressBarsReducer;
