import React from 'react';

import styles from './TickerRow.module.css';

const TickerRow = ({tickerItem}) => {
    const {
        ticker,
        price,
        change_percent,
    } = tickerItem;
    return (
        <tr>
            <td><div className={styles.ticker}>{tickerItem.ticker}</div></td>
            <td><div>{tickerItem.exchange}</div></td>
            <td>
                <div >
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