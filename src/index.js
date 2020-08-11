// react related imports 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux related imports
import { createStore } from 'redux'; 

// joiner imports
import { Provider } from 'react-redux'; 

import { store } from './reducers/carReducer'; 
import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
