
const listToIdMap = (list) => list.map((item, index) => ({ id: `id_${index}`, data: item }));

export const normalizeBarsData = ({ bars, buttons, limit }) => ({
  bars: {
    list: listToIdMap(bars),
    all: bars,
  },
  buttons: {
    list: listToIdMap(buttons),
    all: buttons,
  },
  limit,
});
export default normalizeBarsData;
