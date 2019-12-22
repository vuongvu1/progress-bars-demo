import { normalizeBarsData } from '../utils';

describe('utils', () => {
  it('normalizeBarsData', () => {
    const input = {
      buttons: [45, 20, -26, -20],
      bars: [54, 13, 80],
      limit: 170,
    };

    const expectedResult = {
      bars: {
        all: [54, 13, 80],
        list: [
          { data: 54, id: 'id_0' },
          { data: 13, id: 'id_1' },
          { data: 80, id: 'id_2' },
        ],
      },
      buttons: {
        all: [45, 20, -26, -20],
        list: [
          { data: 45, id: 'id_0' },
          { data: 20, id: 'id_1' },
          { data: -26, id: 'id_2' },
          { data: -20, id: 'id_3' },
        ],
      },
      limit: 170,
    };

    expect(normalizeBarsData(input)).toEqual(expectedResult);
  });
});
