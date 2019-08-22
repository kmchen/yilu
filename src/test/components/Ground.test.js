import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ground from '../../components/Ground';
import data from '../../../data/data.js';

configure({ adapter: new Adapter() });

describe('Ground component', () => {
  let groundComponent;

  beforeEach(() => {
    const props = {
      address: 'some address',
    };
    groundComponent = shallow(<Ground {...props} />);
  });

  it('should render Ground component', () => {
    expect(groundComponent).toMatchSnapshot();
  });
});

