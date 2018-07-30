import React from 'react';
import ReactDOM from 'react-dom';
import FretBoard from './components/FretBoard.jsx';
import {setupNeck} from './modules/scale';

//setup a guitar neck with standard tuning
const neck = setupNeck(["E","A","D","G","B","E"]);
ReactDOM.render(
  <FretBoard neck={neck} />,
  document.getElementById('guitar')
);

const violin = setupNeck(["G","D","A","E"]);
ReactDOM.render(
  <FretBoard neck={violin} />,
  document.getElementById('violin')
);

module.hot.accept();
