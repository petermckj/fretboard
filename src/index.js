import React from 'react';
import ReactDOM from 'react-dom';
import FretBoard from './components/FretBoard.jsx';
import {neck} from './modules/scale';

ReactDOM.render(
  <FretBoard neck={neck} />,
  document.getElementById('app')
);

module.hot.accept();
