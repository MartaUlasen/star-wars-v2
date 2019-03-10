import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk),
    )
}

/* {
        films: {
            data: [],
            isLoading: false,
            error: null,
        },
        characters: {
            data: [],
            isLoading: false,
            error: null,
        }
        film: {
            id: null,
            data: {},
            isLoading: false,
            error: null,
            characters: [],
        }
} */
