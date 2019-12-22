import mockStore from 'tests/utils/mockStore';
import { fetchBarsDataAction } from '../actions';

describe('Progress Bars actions', () => {
  describe('fetchBarsDataAction', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should dispatch success action', async () => {
      const barsData = {
        buttons: [45, 20, -26, -20],
        bars: [54, 13, 80],
        limit: 170,
      };
      const nomalizedBarsData = {
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
      };

      fetch.mockResponseOnce(JSON.stringify(barsData));

      const store = mockStore();
      await store.dispatch(fetchBarsDataAction());
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: 'FETCH_BARS_DATA' });
      expect(actions[1]).toEqual({ type: 'FETCH_BARS_DATA_SUCCESS', payload: nomalizedBarsData });
    });

    it('should dispatch failure action', async () => {
      fetch.mockResponseOnce(new Error());

      const store = mockStore();
      await store.dispatch(fetchBarsDataAction());
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: 'FETCH_BARS_DATA' });
      expect(actions[1]).toEqual({ type: 'FETCH_BARS_DATA_FAILURE' });
    });
  });
});
