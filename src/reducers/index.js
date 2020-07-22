import { combineReducers } from 'redux';
import films from './films';
import film from './film';
import characters from './characters';
import character from './character';

const rootReducer = combineReducers({
    films,
    film,
    characters,
    character,
});

export default rootReducer;
