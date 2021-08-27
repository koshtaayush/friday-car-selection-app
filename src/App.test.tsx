import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
test('renders the component', () => {
  const component = shallow(<App />);  
  // expect(component).toMatchSnapshot();
  expect(component.find({ 'test-id': 'stepOne' })).toHaveLength(0)

});

// https://www.behance.net/gallery/125129425/Car-Rental-Mobile-App?tracking_source=search_projects_recommended%7Ccar%20app