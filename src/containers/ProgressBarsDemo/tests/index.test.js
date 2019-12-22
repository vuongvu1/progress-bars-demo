import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import mockStore from 'tests/utils/mockStore';
import ProgressBarsDemo from '../index';

const initialState = {};

describe('<ProgressBarsDemo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <ProgressBarsDemo />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
