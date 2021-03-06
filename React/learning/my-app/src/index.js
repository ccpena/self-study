import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MyApp from './components/MyApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<MyApp />, getElement('content'));

function getElement( elementId) {
    return document.getElementById(elementId);
}


registerServiceWorker();
