import React from 'react';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/Rotas';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

const App = () => {
  console.tron.log('Op');

  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
};

export default App;
