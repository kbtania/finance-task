import {
    GET_TICKERS_CURRENT,
    GET_TICKERS_PREVIOUS,
    GET_TICKERS_ERROR} from './actionTypes';

const initialState = {
    currentTickers: [],
    previousTickers: [],
    error: false,
};


export function tickersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TICKERS_CURRENT: {
            return {
                ...state,
                currentTickers: action.payload,
                error: false,
            };
        }
        case GET_TICKERS_PREVIOUS: {
            return {
                ...state,
                previousTickers: action.payload,
                error: false,
            };
        }
        case GET_TICKERS_ERROR: {
            return {
                ...state,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
}