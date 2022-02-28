import React from 'react';
import {render} from 'react-dom';
import Test from './components/test';
import { Provider } from 'react-redux';
import configureStore from './store'; 
import '../styles/main.scss';

const renderTo = document.querySelector("#root");
const store  = configureStore();
render(<Provider store={store}><Test/></Provider>,renderTo);