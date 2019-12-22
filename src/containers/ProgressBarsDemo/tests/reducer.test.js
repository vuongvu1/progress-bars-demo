import reducer, { initialState } from '../reducer';
import { actionTypes } from '../constants';

describe('progressBarsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_BARS_DATA', () => {
    expect(
      reducer(initialState, { type: actionTypes.FETCH_BARS_DATA }),
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle FETCH_BARS_DATA_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_BARS_DATA_SUCCESS,
      payload: {
        bars: {
          all: [54, 13, 80],
          list: [
            { data: 54, id: 'id_0' },
            { data: 13, id: 'id_1' },
            { data: 80, id: 'id_2' },
          ],
        },
        buttons: {
          all: [-26, -20, 20, 45],
          list: [
            { data: -26, id: 'id_0' },
            { data: -20, id: 'id_1' },
            { data: 20, id: 'id_2' },
            { data: 45, id: 'id_3' },
          ],
        },
        limit: 170,
      },
    };

    expect(
      reducer(initialState, action),
    ).toEqual({
      ...initialState,
      isLoading: false,
      bars: {
        all: [54, 13, 80],
        list: [
          { data: 54, id: 'id_0' },
          { data: 13, id: 'id_1' },
          { data: 80, id: 'id_2' },
        ],
      },
      buttons: {
        all: [-26, -20, 20, 45],
        list: [
          { data: -26, id: 'id_0' },
          { data: -20, id: 'id_1' },
          { data: 20, id: 'id_2' },
          { data: 45, id: 'id_3' },
        ],
      },
      limit: 170,
    });
  });

  it('should handle FETCH_BARS_DATA_FAILURE', () => {
    const state = {
      ...initialState,
      isLoading: true,
    };

    expect(
      reducer(state, { type: actionTypes.FETCH_BARS_DATA_FAILURE }),
    ).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
