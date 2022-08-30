import React, {useEffect, useState} from 'react';
import {io} from "socket.io-client";
import {Table} from "react-bootstrap";
import styles from './TickersTable.module.css';
import TickerRow from "../TickerRow/TickerRow";
import {socket} from "../../service/socket";

const TickersTable = () => {
    const [currentTickers, setCurrentTickers] = useState([]);
    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', (items) => [setCurrentTickers(items)]);
        return () => {
            socket.removeAllListeners();
        };
    }, [])
    return (
        <div>
            <h1 className={styles.title}>Price Tickers</h1>
            <hr />
            <Table responsive className={styles.table}>
                <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Exchange</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change <br/>Percent</th>
                    <th>Dividend</th>
                    <th>Yield</th>
                </tr>
                </thead>
                <tbody>
                {
                    currentTickers.map(item=>{
                        return (
                            <TickerRow key={item.price} tickerItem={item}/>
                        )
                    })
                }
                </tbody>
            </Table>
        </div>
    );
};

export default TickersTable;