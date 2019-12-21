import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from '../index';

const renderComponent = (props = {}) => render(<ProgressBar {...props} />);

describe('<ProgressBar />', () => {
  it('should render <ProgressBar />', () => {
    const { container } = renderComponent({
      limit: 90,
      id: 'id_01',
      setActive: () => {},
      value: 20,
    });
    expect(container).toMatchSnapshot();
  });
});
