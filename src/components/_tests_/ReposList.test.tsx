import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
// import LandingPage from './LandingPage/LandingPage';
// import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';
import { ReposList } from './../ReposList';

test('Should render RepoList component', () => {
  
    const props = {
    gitHubRepos: [
        {
            name: 'testUSer1',
            url: '/url',
            description: '',
            id: '1',
            updatedAt:'2020/1/12', 
            owner: {
                avatarUrl: '',
                id: '1'
            }
        },
        {
            name: 'testUser2',
            url: '/url2',
            description: '',
            id: '2',
            updatedAt:'2020/2/12', 
            owner: {
                avatarUrl: '',
                id: '2'
            }
        }
    ]
  };

  const wrapper = mount(
      <ReposList {...props} />
  );
  expect(wrapper).toBeDefined();
});
