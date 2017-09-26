import { combineReducers } from 'redux';
import SearchReducer from '../components/SearchBar/searchReducer';
import displayReducer from '../components/WeatherDisplay/displayReducer';
import historyReducer from '../components/SearchHistory/historyReducer';

const rootReducer = combineReducers({
  search: SearchReducer
  // display: displayReducer,
  // history: historyReducer
});

export default rootReducer;
