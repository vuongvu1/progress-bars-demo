import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../index';

const renderComponent = (props = {}) => render(
  <BrowserRouter>
    <Header {...props} />,
  </BrowserRouter>,
);

describe('<Header />', () => {
  it('should render <Header />', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
