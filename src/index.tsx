import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './config-redux/store';
import App from './_components/app';
import './index.css';


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
