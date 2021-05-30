import { createStore, applyMiddleware, combineReducers  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import forecastReducer from "./reducers/forecastReducer";

// export default createStore(combineReducers({forecastFormReducer, forecastResultReducer, forecastTitleReducer}), composeWithDevTools(applyMiddleware(thunk)));
export default createStore(forecastReducer, applyMiddleware(thunk));