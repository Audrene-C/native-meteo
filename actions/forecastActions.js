/*TODO*/

export const updateForecast = (forecast) => ({
    type: 'UPDATE_FORECAST',
    forecast: forecast
});

export const toggleLoader = (status) => ({
    type: 'UPDATE_LOADER',
    loader: status
});

export const fetchForecast = (city) => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        const response = await fetch("http://api.weatherstack.com/current?access_key=8fa43c8c55e065453a1e365d29964a98&query="+city);
        const data = await response.json();
        dispatch(updateForecast(data));
        dispatch(toggleLoader(false));
    }
};