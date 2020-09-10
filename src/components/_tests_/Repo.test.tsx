import React from 'react';
import { mount } from 'enzyme';
import {Repo} from '../Repo';
describe(' Repo component tests', () => {
    const props = {
        repo: {
            name: 'repo1',
            url: '/url',
            description: '',
            id: '1',
            updatedAt: '2020/1/12',
            owner: {
                avatarUrl: '',
                id: '1'
            }
        }
    };
    const wrapper = mount(
        <Repo {...props} />
    );

    test('should render Repo details', () => {
        expect(wrapper).toBeDefined();
    });
})