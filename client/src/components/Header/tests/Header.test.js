import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import Header from '../Header';

const mockedState = {
    currentTickers: [],
    previousTickers: [],
    error: false,
    chosenTicker: null
};
const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
};

test('Header should have website title', async () => {
    render(
        <Provider store={mockedStore}>
            <Header></Header>
        </Provider>
    );
    expect(screen.getByText('Price Tickers')).toBeInTheDocument();
});
