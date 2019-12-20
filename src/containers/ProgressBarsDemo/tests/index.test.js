import React from 'react';
import { shallow } from 'enzyme';
import ProgressBarsDemo from '../index';

describe('<ProgressBarsDemo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ProgressBarsDemo />);
    expect(wrapper).toMatchSnapshot();
  });
});
