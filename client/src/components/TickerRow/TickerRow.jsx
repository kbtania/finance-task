import React, {useEffect, useState} from 'react';

import styles from './TickerRow.module.css';
import {useDispatch, useSelector} from "react-redux";
import {tickersSelector} from "../../store/tickers/selector";
import {getChosenTicker, getTickersError} from "../../store/tickers/actionCreators";

const TickerRow = ({tickerItem}) => {
    const { ticker, price} = tickerItem;
    const [trendPrice, setTrendPrice] = useState(null);
    const { previousTickers, chosenTicker } = useSelector(tickersSelector);


    const dispatch = useDispatch();

    useEffect(() => {
        previousTickers.map((previousData) => {
            if (previousData.ticker === ticker &&
                Number(previousData.price) > Number(price)) {
                setTrendPrice(false);
            } if (previousData.ticker === ticker &&
                Number(previousData.price) < Number(price)) {
                setTrendPrice(true);
            }
            return previousData;
        });
    }, [previousTickers, price, ticker]);

    function handleChoice() {
        dispatch(getTickersError)
        dispatch(getChosenTicker(ticker));
    }
    return (
        <tr onClick={handleChoice} className="tickerRow" className={chosenTicker === ticker ? styles.selected: styles.row}>
            <td><div className={styles.ticker}>{tickerItem.ticker}</div></td>
            <td><div>{tickerItem.exchange}</div></td>
            <td>
                <div className={trendPrice ? styles.positive : styles.negative}>
                    {trendPrice ? <span className={styles.arrowUp}>&#9650;</span> : <span className={styles.arrowDown}>&#9660;</span>}
                    {tickerItem.price}
                </div></td>
            <td><div>{tickerItem.change}</div></td>
            <td>
                <div>
                    {tickerItem.change_percent}
                </div>
            </td>
            <td><div>{tickerItem.dividend}</div></td>
            <td><div>{tickerItem.yield}</div></td>
        </tr>
    );
};

export default TickerRow;