/**
 * Created by guoguangyu on 2016/10/25.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from './main';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>),
  document.querySelector('#wrapper')
);
