import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
test('renders the component', () => {
  const component = shallow(<App />);  
  // expect(component).toMatchSnapshot();
  expect(component.find({ 'test-id': 'stepOne' })).toHaveLength(0)

});

