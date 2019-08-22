import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '../../components/Landing';
import data from '../../../data/data.js';

configure({ adapter: new Adapter() });

describe('Landing component', () => {
  let landingComponent;

  beforeEach(() => {
    const props = {
      origin: 'an origin',
      destination: 'a destination',
      gate: 'a gate',
      seat: 'a seat',
      isOnTime: true,
      boardingTime: 12345667,
      flightNumber: '1234567',
    };
    landingComponent = shallow(<Landing {...props} />);
  });

  it('should render Landing component', () => {
    expect(landingComponent).toMatchSnapshot();
  });
});
