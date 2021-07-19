import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexApp from './routers'
import reportWebVitals from './reportWebVitals';
import store from './reducer/store'
import { Provider } from 'react-redux';
import 'zarm/dist/zarm.css';

ReactDOM.render(
    <Provider store={store}>
        <IndexApp />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
