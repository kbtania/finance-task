import {
    GET_TICKERS_REQUESTED,
    GET_TICKERS_CURRENT,
    GET_TICKERS_PREVIOUS,
    GET_TICKERS_ERROR} from './actionTypes';

export const getTickersRequested = () => {
    return {
        type: GET_TICKERS_REQUESTED,
    };
};

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

export const getTickersError = () => {
    return {
        type: GET_TICKERS_ERROR,
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