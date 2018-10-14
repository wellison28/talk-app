import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Welcome from './components/Welcome';

export default props => (

  <Router>
    <Stack key='root'>
      <Scene key="formLogin" component={FormLogin} title="login" />
      <Scene key="formRegister" component={FormRegister} title="Cadastro" />
      <Scene key="welcome" component={Welcome} title="Boas Vindas"/>
    </Stack>
  </Router>
)