import React, {useEffect, useState} from 'react';
import {
    Line,
    LineChart,
    XAxis,
    YAxis,
} from 'recharts';

import {socket} from "../../service/socket";
import {useSelector} from "react-redux";
import {tickersSelector} from "../../store/tickers/selector";

import styles from './Chart.module.css';

const Chart = () => {
    const [selectedTicker, setSelectedTicker] = useState([]);
    const [previousTicker, setPreviousTicker] = useState(null);
    const { chosenTicker } = useSelector(tickersSelector);


    useEffect(() => {
        if (previousTicker !== chosenTicker) {
            setSelectedTicker([]);
        }
        socket.on(`${chosenTicker}`, res => {
            setSelectedTicker(currentData => [...currentData, res]);
            setPreviousTicker(chosenTicker);
        })
        return () => {
            socket.off(`${chosenTicker}`);
        };
    }, [chosenTicker]);
    return (
        <div className={styles.chart}>
            <h2>Chart for {chosenTicker} ticker</h2>
            <LineChart width={400} height={300} data={selectedTicker.flat()}>
                <XAxis dataKey="last_trade_time" />
                <YAxis />
                <Line dataKey="price" />
            </LineChart>
        </div>

    );
};

export default Chart;