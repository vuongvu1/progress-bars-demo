import React from 'react';
import { render } from '@testing-library/react';

import ControlPanel from '../ControlPanel';

const renderComponent = (props = {}) => render(<ControlPanel {...props} />);

describe('<ControlPanel />', () => {
  it('should render <ControlPanel />', () => {
    const { container } = renderComponent({
      barList: [{ id: 'id_0', data: 45 }, { id: 'id_1', data: 20 }, { id: 'id_2', data: 80 }],
      buttonList: [{ id: 'id_0', data: 54 }, { id: 'id_1', data: 13 }, { id: 'id_2', data: -26 }],
      limitValue: 170,
    });
    expect(container).toMatchSnapshot();
  });
});
