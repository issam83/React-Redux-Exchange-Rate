import { combineReducers } from 'redux';
import ReducerCountries from './reducerCountries'
import reducerRateExchange from './reducerRateExchange';

const rootReducer = combineReducers({
  countryReducer: ReducerCountries,
  rateExchangeReducer: reducerRateExchange
});

export default rootReducer;
