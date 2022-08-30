import {
    GET_TICKERS_REQUESTED,
    GET_TICKERS_CURRENT,
    GET_TICKERS_PREVIOUS,
    GET_TICKERS_ERROR} from './actionTypes';

const initialState = {
    currentTickers: [],
    previousTickers: [],
    loading: false,
    error: false,
};


export function tickersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TICKERS_REQUESTED: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case GET_TICKERS_CURRENT: {
            return {
                ...state,
                currentTickers: action.payload,
                loading: false,
                error: false,
            };
        }
        case GET_TICKERS_PREVIOUS: {
            return {
                ...state,
                previousTickers: action.payload,
                loading: false,
                error: false,
            };
        }
        case GET_TICKERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        default: {
            return state;
        }
    }
}