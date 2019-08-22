import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Takeoff from '../../components/TakeOff';
import data from '../../../data/data.js';

configure({ adapter: new Adapter() });

describe('Takeoff component', () => {
  let takeoffComponent;

  beforeEach(() => {
    const props = {
      airportName: 'some name',
      busynessIndex: 10
    };
    takeoffComponent = shallow(<Takeoff {...props} />);
  });

  it('should render Landing component', () => {
    expect(takeoffComponent).toMatchSnapshot();
  });
});

