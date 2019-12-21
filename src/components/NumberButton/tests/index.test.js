import React from 'react';
import { render } from '@testing-library/react';

import NumberButton from '../index';

const renderComponent = (props = {}) => render(<NumberButton {...props} />);

describe('<NumberButton />', () => {
  it('should render <NumberButton />', () => {
    const { container } = renderComponent({
      value: 30,
      updateValue: () => {},
    });
    expect(container).toMatchSnapshot();
  });
});
