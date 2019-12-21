import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ProgressBarsDemo from '../index';

const initialState = {};
const mockStore = configureStore();

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
