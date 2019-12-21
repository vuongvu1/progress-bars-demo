import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../index';

const renderComponent = (props = {}) => render(<Footer {...props} />);

describe('<Footer />', () => {
  it('should render <Footer />', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
