import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import Servicos from './src/telas/Servicos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <Servicos />
    </SafeAreaView>
  );
};

export default App;
