import styles from "./TopCollectors.module.scss"
import { useState } from "react";
import CollectorColumn from "./CollectorColumn";
import { Container , Grid , Select , MenuItem } from "@mui/material";
import _ from "lodash";

export default function TopCollectors({ collectors = [] }) {
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} maxWidth="xl">
                <Grid container direction="row" className={styles.gridContainer}>
                    <Grid item className={styles.header}>
                        <div className={styles.title}>Top Collectors</div>
                        <Select className={styles.select}
                        style={{ width : '250px' }}
                        value={time}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">Sort by</MenuItem>
                            <MenuItem value={10}>Most items</MenuItem>
                            <MenuItem value={20}>Name</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item className={styles.collectors} xl>
                    {_.chunk(collectors,3).map( ( collector, index ) => 
                    <CollectorColumn key={index} items={collector}  />
                    )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}