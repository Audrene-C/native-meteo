let initialState = {
  forecast: {},
  loader: false
};

export default function calculatriceReducer(state = initialState, action) {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast: action.forecast
          };
      case 'UPDATE_LOADER':
          return {
            ...state,
            loader: action.loader
          };
      default :
          return state;
  }
};
