import Header from '../../client/_components/Header'
import React from 'react';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

test('App component says "App Works!"', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <Header />
    </MuiThemeProvider>
  );

  const title = wrapper.find('h1');
  expect(title.text()).toBe('React16 Starter + JEST');
});