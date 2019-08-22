import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AppComponent } from '../App';
import data from '../../data/data.js';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let appComponent;

  beforeEach(() => {
    const props = {
      itinerary: data.segments,
    };
    appComponent = shallow(<AppComponent {...props} />);
  });

  it('should render App component', () => {
    expect(appComponent).toMatchSnapshot();
  });
});
