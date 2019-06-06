import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//REDUX
import { createStore } from 'redux'
//REACT-REDUX CONNECT
import { Provider } from 'react-redux'
//CREATE STORE
const store = createStore()

//ADD STORE INSIDE PROVIDER TO SHARE STATE TO APP
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));