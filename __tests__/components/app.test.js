import App from '../../client/_components/App'
import React from 'react';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('App component says "App Works!"', () => {
  const wrapper = mount(
    <App />
  );

  const title = wrapper.find('h1');
  expect(title.text()).toBe('App Works!');
});