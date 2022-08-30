import {
    GET_TICKERS_CURRENT,
    GET_TICKERS_PREVIOUS,
    GET_TICKERS_ERROR, GET_CHOSEN_TICKER
} from './actionTypes';

const getTickersActual = (tickers) => {
    return {
        type: GET_TICKERS_CURRENT,
        payload: tickers,
    };
};

const getTickersPrevious = (tickers) => {
    return {
        type: GET_TICKERS_PREVIOUS,
        payload: tickers,
    };
};

export const getTickersError = (errorValue) => {
    return {
        type: GET_TICKERS_ERROR,
        payload: errorValue
    };
};

export const getChosenTicker = (ticker) => {
    return {
        type: GET_CHOSEN_TICKER,
        payload: ticker
    };
};


export const setTickers = (tickers) => (dispatch, getState) => {
    dispatch(
        getTickersPrevious(
            getState().tickers.currentTickers.map((tic) => ({
                ticker: tic.ticker,
                price: tic.price,
                percent_change: tic.percent_change
            }))
        )
    );
    dispatch(getTickersActual(tickers));
};