import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ForecastChosenCity from './ForecastChosenCity';

const ForecastTitle = (props) => {
  let date = new Date();
  let options = {weekday: "short", month: "short", day: "2-digit"};

    return (
      ('error' in props.forecast) ?
      <Text style={styles.text}>Something went wrong, please try again later</Text>
      :
      <View style={styles.container}>
        <ForecastChosenCity city={props.forecast.location.name} />
        <Text style={styles.text}>{date.toLocaleDateString("fr-FR", options)}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
    },
});

export default ForecastTitle;
