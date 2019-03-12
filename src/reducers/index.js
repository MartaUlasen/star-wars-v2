import { combineReducers } from 'redux';
import films from './films';
import characters from './characters';

const rootReducer = combineReducers({
    films,
    characters,
});

export default rootReducer;