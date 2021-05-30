import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchForecast } from "../actions/forecastActions";
import ForecastResult from './ForecastResult';
import ForecastTitle from './ForecastTitle';
import ForecastForm from './ForecastForm';

const Forecast = (props) => {
    return (
        (props.forecast && Object.keys(props.forecast).length === 0) ?
            <View style={styles.container}>
                <ForecastForm fetchForecast={props.fetchForecast} />
            </View>
            :
            <View style={styles.container}>
                <ForecastTitle forecast={props.forecast} />
                <ForecastResult forecast={props.forecast} />
                <ForecastForm fetchForecast={props.fetchForecast} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
});

const mapStateToProps = (state) => ({
    forecast: state.forecast
    
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      fetchForecast
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
