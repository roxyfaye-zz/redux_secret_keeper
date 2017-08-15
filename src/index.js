import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

import Login from './Login';
import BaseLayout from './BaseLayout';
import Register from './Register';
import Dashboard from './Dashboard';

const store = createStore(reducer, compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/Login" component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Dashboard" component={Dashboard} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </Provider>
      ), document.getElementById('root'));
registerServiceWorker();
