import React from 'react';
import ReactDOM from 'react-dom';
import FiltersBar from './FiltersBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FiltersBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

