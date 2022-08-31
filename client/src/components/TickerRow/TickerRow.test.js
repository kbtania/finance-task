import {render} from "@testing-library/react";
// import {useSelector} from "react-redux";
import * as reduxHooks from 'react-redux';

import TickerRow from "./TickerRow";

jest.mock('react-redux');

let item = {
    ticker: 'AAPL',
    exchange: 'NASDAQ',
    price: 105.89,
    change: 178.23,
    change_percent: 0.21,
    dividend: 1.64,
    yield: 1.56
}
let mockStore = {
    currentTickers: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: 105.89,
            change: 178.23,
            change_percent: 0.21,
            dividend: 1.64,
            yield: 1.56
        }
    ],
    previousTickers: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: 105.89,
            change: 178.23,
            change_percent: 0.21,
            dividend: 1.64,
            yield: 1.56
        }
    ],
    error: false,
    chosenTicker: 'AAPL'
}
describe('TickerRow component', () => {
    it('should create list with tickers', () => {
        jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(mockStore)
        const component = render(<TickerRow tickerItem={item}/>);
        expect(component).toMatchSnapshot();
    })
})