import styles from "./ProductActions.module.scss"
import { Button , Grid } from "@mui/material";
import { useState , useEffect } from "react";
import classNames from "classnames";
import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const hanlderOnBuy = () => {
    eventEmitter.emit('bought');
}

const hanlderOnBid = () => {
    eventEmitter.emit('bid');
}

export default function ProductActions({ isLive = false , currency = " " , buyAmount = 0 , bidAmount = 0 , onBuy = hanlderOnBuy , onBid = hanlderOnBid }) {
    const [buyButton, setBuyButton] = useState(false);
    const [bidButton, setBidButton] = useState(false);

    useEffect(() => {
        setBuyButton(isLive);
        setBidButton(isLive);
    },[]);

    eventEmitter.on('bought', () => setBuyButton(!isLive));
    eventEmitter.on('bid', () => setBidButton(!isLive));

    return(
        <div className={styles.wrapper}>
            <div className={styles["product-action"]}>
                <div className={styles.buttons}>
                    <Button disabled={!buyButton} className={styles.button} variant="contained" onClick={ () => onBuy }>Buy for {buyAmount} {currency}</Button>
                    <Button disabled={!bidButton} className={classNames(styles.button , styles.bidButton)} variant="outlined" color="success" onClick={ () => onBid }>Place a bid for {bidAmount} {currency}</Button>
                </div>
            </div>
        </div>
    );
}