import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';

export default function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk)),
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
            count: null,
        },
        film: {
            id: null,
            data: {},
            isLoading: false,
            error: null,
            characters: [],
        }
} */
