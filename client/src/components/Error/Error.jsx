import React from 'react';
import styles from './Error.module.css';
import error from '../../assets/error.png'

const Error = () => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.error}>OOPS! You weren’t supposed to see this</h1>
            <img className={styles.image} src={error} />
        </div>
    );
};

export default Error;