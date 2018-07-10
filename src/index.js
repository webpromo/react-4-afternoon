import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { HashRouter as Router} from 'react-router-dom';

// Wrap the App component in a HashRouter component.

ReactDOM.render(
<Router><App /></Router>
, document.getElementById('root'));




