import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import SearchForm from './../SearchForm';

test('should render SearchForm Component', () => {
  
    const props = {
        searchForm: {
            searchQuery: ''
        },
        handleChange: jest.fn()
  };

  const wrapper = mount(
      <SearchForm {...props} />
  );
  expect(wrapper).toBeDefined();
});

test('should call handleChange method when change searchQueryValues', () => {
    const handleChangeSpy = jest.fn();
    const props = {
        searchForm: {
            searchQuery: ''
        },
        handleChange: handleChangeSpy
  };

  const wrapper = mount(
      <SearchForm {...props} />
  );
  wrapper.find('input').at(0).simulate('change');
  expect(handleChangeSpy).toHaveBeenCalled();
});
