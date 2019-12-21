import { fetchBarsData } from 'utils/apiClient';
import { actionTypes } from './constants';
import { normalizeBarsData } from './utils';

export const fetchBarsDataAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_BARS_DATA });

  try {
    const barsData = await fetchBarsData();

    dispatch({
      type: actionTypes.FETCH_BARS_DATA_SUCCESS,
      payload: normalizeBarsData(barsData),
    });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_BARS_DATA_FAILURE });
  }
};

export default fetchBarsDataAction;
