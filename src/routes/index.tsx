import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/main" component={Main} />
  </Switch>
);

export default Routes;
