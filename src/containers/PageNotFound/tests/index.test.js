import React from 'react';
import { render } from '@testing-library/react';

import PageNotFound from '../index';

const renderComponent = (props = {}) => render(<PageNotFound {...props} />);

describe('<PageNotFound />', () => {
  it('should render <PageNotFound />', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
