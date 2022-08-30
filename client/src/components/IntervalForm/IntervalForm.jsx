import React, {useState} from 'react';
import {socket} from "../../service/socket";
import {Alert, Button, Form} from "react-bootstrap";
import styles from './IntervalForm.module.css';

const IntervalForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [wrongNumber, setWrongNumber] = useState(false);

    const onInputChange = (e) => {
        setInputValue(e.currentTarget.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue < 1) {
            setWrongNumber(true);
            setInputValue("");
        } else {
            setWrongNumber(false);
            socket.emit("changeInterval", inputValue * 1000);
            setInputValue("");
        }

    };
    return (
    <Form className={styles.form}>
        <Form.Group className="mb-3">
            <Form.Label className={styles.label}>&#9203; Set Update Interval</Form.Label>
            {
                wrongNumber &&
                <Alert key="danger" variant="danger">
                    Number of seconds must be more that 1
                </Alert>
            }
            <div className={styles.inputGroup}>
                <Form.Control
                    min="1"
                    type="number"
                    placeholder="5"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <Button variant="dark" onClick={onSubmit}>Set</Button>
            </div>

            <Form.Text className="text-muted">
                Enter time interval in seconds
            </Form.Text>
        </Form.Group>
    </Form>
    );
};

export default IntervalForm;