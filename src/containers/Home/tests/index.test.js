import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
