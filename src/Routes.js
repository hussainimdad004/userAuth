import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './components/pages/Login';
import Signup from './components/pages/Register';

const Routes = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="login" component={Login} title="LOGIN!" initial={true} />
        <Scene key="signup" component={Signup} title="REGISTER" />
      </Stack>
    </Router>
  );
};
export default Routes;
