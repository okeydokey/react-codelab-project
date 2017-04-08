import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { BrowserRouter, Route } from 'react-router-dom';

// Container Components
import { App, Home, Login, Register } from 'containers';

// Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App>
            {/*<Route exact path="/" component={App}/>*/}
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </App>
    </BrowserRouter>
    , rootElement
);
