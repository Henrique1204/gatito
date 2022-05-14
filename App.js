import React from 'react';
import * as ReactNative from 'react-native';

import Servicos from './src/telas/Servicos';

import * as EstilosGlobais from './estilos';

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <ReactNative.SafeAreaView style={styles.container}>
      <ReactNative.StatusBar />

      <ReactNative.KeyboardAvoidingView
        behavior={ReactNative.Platform == 'ios' ? 'padding' : 'height'}
        style={EstilosGlobais.preencher}
      >
        <Servicos />
      </ReactNative.KeyboardAvoidingView>
    </ReactNative.SafeAreaView>
  );
};

export default App;
