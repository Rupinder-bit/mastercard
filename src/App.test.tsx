import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
// import LandingPage from './LandingPage/LandingPage';
// import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';
import App from './App';
import { SearchGitHubUsers } from './components/SearchGitHubUsers';

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(SearchGitHubUsers)).toHaveLength(1);
});
