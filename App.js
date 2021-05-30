import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Forecast from './components/Forecast';
import store from './store';
import bg from './img/bg.jpg';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ImageBackground source={bg} style={styles.image}>
          <Forecast />
        </ImageBackground>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
