require('./css/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import $ from 'jquery';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
