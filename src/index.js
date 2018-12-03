import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Ranker from './components/Ranker';

const routing = (
  <Router>
    <div>
        <Route path="/home" component={App} />
        <Route path="/quiz/moderate" component={() => <Ranker topic="moderate" />} />
        <Route path="/quiz/variety" component={() => <Ranker topic="variety" />} />
        <Route path="/quiz/adequate" component={() => <Ranker topic="adequate" />} />
        <Route path="/quiz/balance" component={() => <Ranker topic="balance" />} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
