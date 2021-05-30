import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { fetchForecast } from "../actions/forecastActions";
import wind from "../img/wind.webp";
import humidity from "../img/humidity.png";

const ForecastResult = (props) => {
    let d= "°C";
    let km = "km/h";
    let pc = "%";

    return (
            ('error' in props.forecast) ? 
                <></>
                :
                <View style={styles.container}>
                    <View style={styles.inline}>
                        <Image
                            style={styles.tinyLogo}
                            source={{uri : props.forecast.current.weather_icons[0]}}
                        />
                        <Text style={styles.weather}>{props.forecast.current.weather_descriptions[0]}</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.temp}>{props.forecast.current.temperature + d}</Text>
                        <View>
                            <Text style={styles.minmax}>{"min " + (props.forecast.current.temperature - 6) + d}</Text>
                            <Text style={styles.minmax}>{"max " + (props.forecast.current.temperature + 6) + d}</Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Image
                            style={styles.tinyLogo}
                            source={wind}
                        />
                        <Text style={styles.text}>{props.forecast.current.wind_speed + km}</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={humidity}
                        />
                        <Text style={styles.text}>{props.forecast.current.humidity + pc}</Text>
                    </View>
                </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        borderRadius: 10,
        backgroundColor: "white"
    },
    minmax: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20
    },
    temp: {
        color: '#2d2e6e',
        fontWeight: 'bold',
        fontSize: 50
    },
    tinyLogo: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 10
    },
    inline: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    weather: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2d2e6e',
        margin: 10
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#2d2e6e",
        width: "80%",
        borderRadius: 10,
        marginBottom: -30,
        opacity: 1
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

const mapStateToProps = (state) => ({
    forecast: state.forecast
    
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      fetchForecast
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastResult);
