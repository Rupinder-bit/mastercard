import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import LoadingSpinner from '../LoadingSpinner';
describe(' LoadingSpinner component tests', () => {
    const wrapper = mount(
    <LoadingSpinner />
);

test('should render LoadingSpinner Component', () => {
  expect(wrapper).toBeDefined();
});

test('should call handleChange method when change searchQueryValues', () => {
  const loader = wrapper.find('img').at(0).length;
  expect(loader).toBe(1);
});
})