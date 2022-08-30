import {
    GET_TICKERS_CURRENT,
    GET_TICKERS_PREVIOUS,
    GET_TICKERS_ERROR, GET_CHOSEN_TICKER
} from './actionTypes';

const initialState = {
    currentTickers: [],
    previousTickers: [],
    error: false,
    chosenTicker: 'AAPL'
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
        case GET_CHOSEN_TICKER: {
            return {
                ...state,
                chosenTicker: action.payload

            }
        }
        default: {
            return state;
        }
    }
}