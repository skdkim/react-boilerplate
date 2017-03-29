import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test';

require('../styles/reset.scss');
require('../styles/main.scss');

ReactDOM.render(
  <Test />,
  document.getElementById('container')
);
