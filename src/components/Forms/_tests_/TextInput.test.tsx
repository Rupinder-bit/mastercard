import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
// import LandingPage from './LandingPage/LandingPage';
// import NotFoundPage from './ErrorPage/NotFoundPage/NotFoundPage';
import TextInput from '../TextInput';
describe(' TextInput Box component tests', () => {
    let props, wrapper: any; 
    
    const handleChangeSpy = jest.fn();
beforeEach( () => {
    props = {
        name: 'test',
        placeholder: 'Please enter searchtext',
        onChange: handleChangeSpy,
        value: 'testValue',
        label: '',
        required: true,
        type: ''  
  };
  
  wrapper = mount(
    <TextInput {...props} />
);
});

test('should render TextInput Component', () => {
  expect(wrapper).toBeDefined();
});

test('should call handleChange method when change searchQueryValues', () => {
  wrapper.find('input').at(0).simulate('change');
  expect(handleChangeSpy).toHaveBeenCalled();
});
})