import React from 'react';
import { Image, StyleSheet, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import search from "../img/search.svg.png";

const ForecastForm = (props) => {
    const [text, onChangeText] = React.useState("");

    function fetchCity(city) {
        props.fetchForecast(city);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => fetchCity(text)}
                style={styles.btn}
            >
                <Image source={search} style={styles.tinyLogo}/>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                returnKeyType="search"
                enablesReturnKeyAutomatically={true}
                placeholder="Rechercher une ville"
                value={text}
                onChangeText={onChangeText}
                onSubmitEditing={(event) => fetchCity(event.nativeEvent.text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8,
        backgroundColor: "white",
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    btn: {
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3
    },
    tinyLogo: {
        width: "100%",
        height: "100%",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        textAlign: 'center',
        flex: 7,
        fontSize: 20,
        fontWeight: "bold"
    },
});

export default ForecastForm;
