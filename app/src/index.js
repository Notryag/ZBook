import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexApp from './routers'
import reportWebVitals from './reportWebVitals';
import store from '@/redux/index'
import { Provider } from 'react-redux';
import 'zarm/dist/zarm.css';
import { Provider as BusProvider } from '@/hooks/useBus'

ReactDOM.render(
    <BusProvider>
        <Provider store={store}>
            <IndexApp/>
        </Provider>
    </BusProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
