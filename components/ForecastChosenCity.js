import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ForecastChosenCity = (props) => {
    return (
        <Text style={styles.text}>{props.city}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 50
    },
});

 export default ForecastChosenCity;
