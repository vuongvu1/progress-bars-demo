
const listToIdMap = (list) => list.map((item, index) => ({ id: `id_${index}`, data: item }));

const sortAscending = (list) => list.sort((a, b) => a - b);

export const normalizeBarsData = ({ bars, buttons, limit }) => ({
  bars: {
    list: listToIdMap(bars),
    all: bars,
  },
  buttons: {
    list: listToIdMap(sortAscending(buttons)),
    all: buttons,
  },
  limit,
});

export default normalizeBarsData;
