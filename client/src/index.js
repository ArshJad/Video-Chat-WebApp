import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {ContextProvider} from './SocketContext.js'
import './styles.css';

//ReactDOM.render diplays the Context provider and App inside index.html (client/public/index.html)
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
   , document.getElementById('root'),);