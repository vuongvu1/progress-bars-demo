
export const normalizeBarsData = ({ bars, buttons, limit }) => {
  const barsObject = bars.reduce((object, bar, index) => ({
    ...object,
    [`bar_id_${index}`]: bar,
  }), {});

  const buttonsObject = buttons.reduce((object, button, index) => ({
    ...object,
    [`button_id_${index}`]: button,
  }), {});

  return {
    bars: {
      ...barsObject,
      allBars: bars,
    },
    buttons: {
      ...buttonsObject,
      allButtons: buttons,
    },
    limit,
  };
};

export default normalizeBarsData;
