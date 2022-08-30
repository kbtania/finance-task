import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {Table} from "react-bootstrap";
import styles from './TickersTable.module.css';
import {socket} from "../../service/socket";

import TickerRow from "../TickerRow/TickerRow";
import IntervalForm from "../IntervalForm/IntervalForm";
import {tickersSelector} from "../../store/tickers/selector";
import {getTickersError, setTickers} from "../../store/tickers/actionCreators";
import Chart from "../Chart/Chart";


const TickersTable = () => {
    const { currentTickers, error } = useSelector(tickersSelector);
    const [selectedRow, setSelectedRow] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        socket.emit('start');
        socket.on('ticker', (items) => dispatch(setTickers(items)));
        socket.on('disconnect', ()=>dispatch(getTickersError()));
        return () => {
            socket.off('ticker');
            socket.off('disconnect');
        };
    }, [])



    return (
        <div>
            <h1 className={styles.title}>Price Tickers</h1>
            <hr />
            <IntervalForm/>
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
                            <TickerRow
                                key={item.ticker} tickerItem={item}/>
                        )
                    })
                }
                </tbody>
            </Table>
            <hr />
            <Chart ticker={selectedRow} />
        </div>
    );
};

export default TickersTable;