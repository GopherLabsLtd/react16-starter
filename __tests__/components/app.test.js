import App from '../../client/_components/App'
import React from 'react';
import { mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

test('App component says "App Works!"', () => {
  const wrapper = mount(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );

  const title = wrapper.find('h1#title');
  expect(title.text()).toBe('App Works!');
});