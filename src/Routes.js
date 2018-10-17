import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import Welcome from './components/Welcome';
import Main from './components/Main';

export default props => (

  <Router navigationBarStyle={{ backgroundColor: '#115e54' }} titleStyle={{ color: '#fff' }}>
    <Stack key='root'>
      <Scene key="main" component={Main} title="Principal" hideNavBar={true}/>
      <Scene key="formLogin" component={FormLogin} title="login" hideNavBar={true} />
      <Scene key="formRegister" component={FormRegister} title="Cadastro" hideNavBar={false} />
      <Scene key="welcome" component={Welcome} title="Boas Vindas" hideNavBar={true} />
    </Stack>
  </Router>
)