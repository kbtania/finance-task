import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.text}>Price Ticker</p>
            <p className={styles.text}>Test Task for Incode Group</p>
            <p className={styles.text}>Ⓒ{new Date().getFullYear()}
                <a className={styles.link} href="https://github.com/kbtania"> Tetiana Kobal</a></p>
        </div>
    );
};

export default Footer;